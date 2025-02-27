import routes from '~/admin/configs/Routes'
// PAGES 
import Dashboard from '~/admin/pages/Dashboard'
import Store from '~/admin/pages/Store'

const publicRoutes = [
  {
    path: routes.dashboard,
    component:Dashboard
  }, 
  {
    path: routes.toy,
    component:Store
  },
  {
    path: routes.decoration,
    component:Store
  }
]

export { publicRoutes }