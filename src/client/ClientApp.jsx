import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/client/routes'
import MainLayout from './layouts/MainLayout'

function ClientApp() {
  return ( 
    <Routes>
      {
        publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = route.layout || MainLayout
          if (route.layout === null) {
            Layout = ({ children }) => <>{children}</>
          }
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
        })
      }
    </Routes>
  )
}

export default ClientApp