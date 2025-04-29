import StoreLayout from '~/client/layouts/StoreLayout'
import routes from '~/client/configs/Routes'
// PAGES 
import Home from '~/client/pages/Home'
import Store from '~/client/pages/Store'
import ProfileSetting from '~/client/pages/ProfileSetting'
import Login from '~/shared/pages/Login'
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