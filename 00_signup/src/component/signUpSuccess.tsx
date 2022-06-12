import React from 'react'

type signUpSuccessProps = {
  userName: string;
}


const SignUpSuccess:React.FC<signUpSuccessProps> = ({userName}) => {
  return (
    <div>Hello {userName}</div>
  )
}

export default SignUpSuccess