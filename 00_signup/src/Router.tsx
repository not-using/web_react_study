
import { Routes, Route } from 'react-router-dom'
import Welcome from './component/welcome'
import SignUp from './component/signUp'

const Router = () => {
  return (
    <Routes>
        <Route path ="/signup" element={<SignUp/>}/>
        <Route path="/*" element={<Welcome/>} />
    </Routes>
  )
}

export default Router