import { useState } from 'react'
import SignUpForm from '../component/signUpForm/signUpForm'
import SignUpSuccess from '../component/signUpSuccess';
import '../css/signUp.css'

const SignUp = () => {
  const [submitedName, setSubmitedName] = useState("");
  return (
    <main className='sign-up'>
      <h1>SignUp</h1>
        {submitedName ? <SignUpSuccess userName={submitedName}/> : <SignUpForm setName={setSubmitedName}/>}
    </main>
  )
}

export default SignUp
