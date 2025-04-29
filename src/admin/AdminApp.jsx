import { Routes, Route } from 'react-router-dom'
import privateRoutes from '~/admin/routes'
import MainLayout from './layouts/MainLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AuthRoute from './components/AuthRoute'
import Login from './pages/Login'
function AdminApp() {
  return ( 
    <Routes>
      {
          privateRoutes.map((route, index) => {
            const Page = route.component
            let Layout = route.layout || MainLayout
            if (route.layout === null) {
              Layout = ({ children }) => <>{children}</>
            }
            const element = (
              <ProtectedRoute>
                <Layout routePath={route.path}>
                    <Page />
                </Layout>
              </ProtectedRoute>
            )
            return <Route key={index} path={route.path} element={element} />
          })
        }
        <Route path='/login' element={<AuthRoute><Login /></AuthRoute>}/>
    </Routes>
  )
}

export default AdminApp