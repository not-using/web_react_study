import React, {useState} from 'react'
import {user } from '../../type/userInfo'
import { passwordValidator } from '../../policy/signUpPolicy'

type ItemProps = {
  currentInfo: user;
  setItem: (a:user) => void;
}

const SignUpPassword :React.FC<ItemProps> = ({currentInfo, setItem}) => {
  const [valid, setValid] = useState(true);
  const [equal, setEqual] = useState(true);
  const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const updateItem = {  "password": e.currentTarget.value };
    setItem({ ...currentInfo, ...updateItem });
    setValid(passwordValidator(e.currentTarget.value));
  } 
  const isEqualPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEqual(currentInfo.password === e.currentTarget.value);
  }
  return (
    <>
      <div className="sign-input">
        <span className="sign-input__title">비밀번호</span>
        <input type="password" onChange={onChangePassword} className="sign-input__box"></input>
        <p className="sign-input__error">{!valid && `영문자 및 숫자, 특수문자 포함 8 ~ 42자로 설정해주세요`}</p>
      </div>
      <div className="sign-input">
        <span className="sign-input__title">비밀번호 확인</span>
        <input type="password" onChange={isEqualPassword}  className="sign-input__box"></input>
        <p className="sign-input__error">{!equal && `비밀번호와 일치하지 않습니다`}</p>
      </div>
    </>
  )
}

export default SignUpPassword