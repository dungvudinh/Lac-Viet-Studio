import React, { useRef, useEffect, useState } from 'react'

const LazyLoadImage = ({ src, alt, className, style }) => {
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing once the image is visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  return (
    <>
      {isVisible ? (
        <img
          src={src}
          alt={alt}
          className={className}
          style={style}
        />
      ) : (
        <div
          ref={imageRef}
          style={{ ...style, backgroundColor: '#f0f0f0' }} // Placeholder while loading
          className={className}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default LazyLoadImage