import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import Dashboard from './pages/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
