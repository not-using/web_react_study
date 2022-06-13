import React, { useState } from 'react'
import { emailValidator, signUpSubmitValidator, userNameValidator, phoneValidator } from '../../policy/signUpPolicy'
import SignUpInput from './signUpInput'
import SignUpPassword from './signUpPassword'
import SignUpUserAgree from './signUpUserAgree'

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
        validator={emailValidator} 
        errorMessage='이메일 형식이 맞지 않습니다' 
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
        validator={phoneValidator} 
        errorMessage='연락처 형식이 맞지 않습니다' 
      />
      <SignUpInput 
        title='유저이름'
        currentInfo={userInfo} 
        updatedItemName='userName' 
        setItem={setUserInfo} 
        validator={userNameValidator} 
        errorMessage='유저이름 형식이 맞지 않습니다' 
      />
      <SignUpInput 
        title='추천인 (선택)'
        currentInfo={userInfo} 
        updatedItemName='recommender' 
        setItem={setUserInfo} 
        validator={userNameValidator} 
        errorMessage='유저이름 형식이 맞지 않습니다' 
      />
      <SignUpUserAgree
        currentInfo={userInfo}
        setItem={setUserInfo}
      />
      <input type='submit' className='sign-up__submit'></input>
    </form>
  )
}


export default SignUpForm