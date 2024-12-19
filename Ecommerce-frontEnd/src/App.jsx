import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'
import { SignIn } from './components/SignIn'
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
