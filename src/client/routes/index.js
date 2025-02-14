import StoreLayout from '../layouts/StoreLayout'
import routes from '~/client/configs/Routes'
// PAGES 
import Home from '~/client/pages/Home'
import Store from '~/client/pages/Store'

const publicRoutes = [
  {
    path: routes.home,
    component:Home
  }, 
  {
    path: routes.store,
    component:Store,
    layout: StoreLayout
  }
]


export { publicRoutes }