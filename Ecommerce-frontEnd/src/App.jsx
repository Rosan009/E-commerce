import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'
import { SignIn } from './components/SignIn'
import { Home } from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  )
}

export default App
