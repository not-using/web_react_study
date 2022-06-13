import React, { useState } from 'react'
import { emailReg, phoneReg, userNameReg, signUpSubmitValidator } from '../../policy/signUpPolicy'
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
        pattern={emailReg} 
        errorMessage='이메일 형식이 맞지 않습니다'
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
        errorMessage='010으로 시작하는 휴대폰번호 숫자만 입력해주세요' 
        isRequired={true}
      />
      <SignUpInput 
        title='유저이름'
        currentInfo={userInfo} 
        updatedItemName='userName' 
        setItem={setUserInfo} 
        pattern={userNameReg} 
        errorMessage='2~10자 사이의 영문자만 가능합니다' 
        isRequired={true}
      />
      <SignUpInput 
        title='추천인 (선택)'
        currentInfo={userInfo} 
        updatedItemName='recommender' 
        setItem={setUserInfo} 
        pattern={userNameReg} 
        errorMessage='2~10자 사이의 영문자만 가능합니다' 
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