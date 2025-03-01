import { Routes, Route } from 'react-router-dom'
import ClientApp from '~/client/ClientApp'
import AdminApp from '~/admin/AdminApp'
function App() {
  return (
    <Routes>
      <Route path='/*' element={<ClientApp/>}/>
      <Route path='/admin/*' element={<AdminApp/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
  )
}

export default App
