import StoreLayout from '~/layouts/StoreLayout'
import routes from '~/configs/routes'
// PAGES 
import Home from '~/pages/Home'
import Store from '~/pages/Store'
import ProfileSetting from '~/pages/ProfileSetting'
import Login from '~/pages/Login'
import OutstandingProduct from '~/pages/OutstandingProduct'
const publicRoutes = [
  {
    path: routes.home,
    component:Home
  }, 
  {
    path: routes.store,
    component:Store,
    layout: StoreLayout
  }, 
  {
    path: routes.outstandingProduct,
    component: OutstandingProduct
  },
  {
    path:routes.profileSetting, 
    component:ProfileSetting
  },
  {
    path:routes.login,
    component: Login,
    layout:null
  }
]
export { publicRoutes }