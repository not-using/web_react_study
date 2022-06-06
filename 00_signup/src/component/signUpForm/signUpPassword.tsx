import React, { useState } from 'react'
import { user } from '../../type/userInfo'
import { passwordValidator } from '../../policy/signUpPolicy'

type ItemProps = {
  currentInfo: user;
  setItem: (a:user) => void;
}

const SignUpPassword :React.FC<ItemProps> = ({currentInfo, setItem}) => {
  const [valid, setValid] = useState(true);
  const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const updateItem = { 'password': e.currentTarget.value };
    setItem({ ...currentInfo, ...updateItem });
    setValid(passwordValidator(e.currentTarget.value));
  }

  const [equal, setEqual] = useState(true);
  const onChangePwCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    const updateItem = { 'pwCheck': valid };
    setItem({ ...currentInfo, ...updateItem });
  }
  const onFocusPwCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEqual(true);
  }
  const onBlurPwCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEqual(currentInfo.password === e.currentTarget.value);
  }

  return (
    <>
      <div className='sign-input'>
        <label className='sign-input__title' htmlFor='password'>비밀번호</label>
        <input type='password' onChange={onChangePassword} className='sign-input__box' id='password'></input>
        {!valid && <label className='sign-input__error' htmlFor='password'>영문자 및 숫자, 특수문자 포함 8 ~ 42자로 설정해주세요</label>}
      </div>
      <div className='sign-input'>
        <label className='sign-input__title' htmlFor='password2'>비밀번호 확인</label>
        <input type='password' onChange={onChangePwCheck} onBlur={onBlurPwCheck} onFocus={onFocusPwCheck} className='sign-input__box' id='password2'></input>
        {!equal && <label className='sign-input__error' htmlFor='password2'>비밀번호와 일치하지 않습니다</label>}
      </div>
    </>
  )
}

export default SignUpPassword