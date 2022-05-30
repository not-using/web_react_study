import { useState } from 'react'
import SignUpForm from './signUpForm'
import SignUpSuccess from './signUpSuccess';

const SignUp = () => {
  const [submitedName, setSubmitedName] = useState("");
  return (
    <div>
      <h1>SignUp</h1>
        {submitedName ? <SignUpSuccess userName={submitedName}/> : <SignUpForm setName={setSubmitedName}/>}
    </div>
  )
}

export default SignUp