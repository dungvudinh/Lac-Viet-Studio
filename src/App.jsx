import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import MainLayout from './layouts/MainLayout'
import CustomAlert from '~/components/Alert'

function App() {
  return ( 
    <>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = route.layout || MainLayout
            if (route.layout === null) {
              Layout = ({ children }) => <>{children}</>
            }
            return <Route key={index} path={route.path} element={<Layout routePath={route.path}><Page /></Layout>} />
          })
        }
      </Routes>
      <CustomAlert />
    </>
  )
}

export default App;