import React, { useRef, useEffect, useState } from 'react'

const LazyLoadBackgroundImage = ({ children, src, alt, className, style }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isVisible ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      aria-label={alt}
    >
      {children}
    </div>
  )
}

export default LazyLoadBackgroundImage