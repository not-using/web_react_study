import React, { useState } from 'react'
import SignUpInput from './signUpInput'
import SignUpPassword from './signUpPassword'
import SignUpUserAgree from './signUpUserAgree'
import { emailReg, phoneReg, userNameReg, signUpSubmitValidator } from '../../policy/signUpPolicy'
import { emailErrorMessage, phoneErrorMessage, userNameErrorMessage } from '../../utils/signUp.messageLiteral'

type signupFormProps = {
  setName: (a:string) => void;
}

const SignUpForm: React.FC<signupFormProps> = ({setName}) => {
  const [userInfo, setUserInfo] = useState({
    email:'',
    password: '',
    pwCheck: false,
    userName: '',
    phone: '',
    recommender: '',
    requiredAgreement: false,
    optionalAgreement: false,
  });

  const onSignUp = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signUpSubmitValidator(userInfo))
      setName(userInfo.userName);
  }
  
  return (
    <form onSubmit={onSignUp}>
      <SignUpInput 
        title='이메일'
        currentInfo={userInfo} 
        updatedItemName='email' 
        setItem={setUserInfo} 
        pattern={emailReg} 
        errorMessage={emailErrorMessage}
        isRequired={true}
      />
      <SignUpPassword
        currentInfo={userInfo}
        setItem={setUserInfo} 
        />
      <SignUpInput 
        title='휴대폰 연락처'
        currentInfo={userInfo} 
        updatedItemName='phone' 
        setItem={setUserInfo} 
        pattern={phoneReg} 
        errorMessage={phoneErrorMessage}
        isRequired={true}
      />
      <SignUpInput 
        title='유저이름'
        currentInfo={userInfo} 
        updatedItemName='userName' 
        setItem={setUserInfo} 
        pattern={userNameReg} 
        errorMessage={userNameErrorMessage} 
        isRequired={true}
      />
      <SignUpInput 
        title='추천인 (선택)'
        currentInfo={userInfo} 
        updatedItemName='recommender' 
        setItem={setUserInfo} 
        pattern={userNameReg} 
        errorMessage={userNameErrorMessage}
        isRequired={false}
      />
      <SignUpUserAgree
        currentInfo={userInfo}
        setItem={setUserInfo}
      />
      <input 
        type='submit' 
        className={`sign-up__submit ${signUpSubmitValidator(userInfo) && 'valid'}`}
      />
    </form>
  )
}


export default SignUpForm