import routes from '~/admin/configs/Routes'
// PAGES 
import Dashboard from '~/admin/pages/Dashboard'
import Store from '~/admin/pages/Store'
import Login from '~/shared/pages/Login'
import NoPermission from '~/shared/pages/NoPermission'
const privateRoutes = [
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
  },
  {
    path:routes.unauthorized, 
    component:NoPermission
  }
]

export default privateRoutes;