import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'
import { SignIn } from './components/SignIn'
import { Home } from './components/Home'
// import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
