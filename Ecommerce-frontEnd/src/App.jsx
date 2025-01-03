import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'
import { SignIn } from './components/SignIn'
<<<<<<< HEAD
import { Home } from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
=======
>>>>>>> 878940a (UI-login-SignIn)
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signin" element={<SignIn />} />
<<<<<<< HEAD
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } 
        />
=======
>>>>>>> 878940a (UI-login-SignIn)
      </Routes>
    </>
  )
}

export default App
