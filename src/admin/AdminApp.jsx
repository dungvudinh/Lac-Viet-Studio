import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/admin/routes'
import MainLayout from './layouts/MainLayout'

function AdminApp() {
  return ( 
    <Routes>
      {
        publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = route.layout || MainLayout
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
        })
      }
    </Routes>
  )
}

export default AdminApp