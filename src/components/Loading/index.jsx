import { useEffect } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
function Loading()
{
  const { isLoading } = useSelector(state => state.loading)
  useEffect(() => {
    // Disable scroll when loading
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup on unmount or isLoading change
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])
  return (
    <Backdrop open={isLoading} sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 200 })}>
      <CircularProgress />
    </Backdrop>
  )
}
export default Loading