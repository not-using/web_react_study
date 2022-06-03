import React, { useState } from 'react'
import { user } from '../../type/userInfo'

type signUpAgreeProps = {
    currentInfo: user;
    setItem: (a:user) => void;
}

const SignUpUserAgree:React.FC<signUpAgreeProps> = ({currentInfo, setItem}) => {
  const [checked, setChecked] = useState(false);
    const onChangeAgree3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked( !checked );
        const updateItem = {  "agreement2": checked };
        setItem({ ...currentInfo, ...updateItem });
    }
  return (
    <div>
        <p>서비스 약관 동의 (필수)</p>
        <label><input type="checkbox"/>이 페이지는 페이지 구현 연습용일 뿐입니다</label>
        <label><input type="checkbox"/>개인정보를 수집하지는 않지만 반드시 동의해주셔야 합니다</label>
        <p>마케팅 용도 개인정보 제공 동의</p>
        <label><input type="checkbox" checked={checked} onChange={onChangeAgree3}/>마케팅 용도로 연락드릴 수도 있는 선택 약관입니다 선택하지 않아도 페이지는 넘어갑니다</label>
    </div>
  )
}

export default SignUpUserAgree