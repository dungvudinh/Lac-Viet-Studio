import StoreLayout from '~/client/layouts/StoreLayout'
import routes from '~/client/configs/Routes'
// PAGES 
import Home from '~/client/pages/Home'
import Store from '~/client/pages/Store'
import ProfileSetting from '~/client/pages/ProfileSetting'

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
  }
]
export { publicRoutes }