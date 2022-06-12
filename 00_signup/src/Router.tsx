
import { Routes, Route } from 'react-router-dom'
import Welcome from './page/welcome'
import SignUp from './page/signUp'

const Router = () => {
  return (
    <Routes>
        <Route path ="/signup" element={<SignUp/>}/>
        <Route path="/*" element={<Welcome/>} />
    </Routes>
  )
}

export default Router