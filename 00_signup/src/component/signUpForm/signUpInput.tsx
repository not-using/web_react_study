import React, { useState } from 'react'
import { user } from '../../utils/userInfo.type'
import '../../css/signUpInput.css'

type ItemProps = {
  title: string,
  currentInfo: user;
  updatedItemName: string;
  setItem: (a:user) => void;
  pattern: RegExp;
  errorMessage: string;
  isRequired: boolean;
}

const SignUpInput :React.FC<ItemProps> = ({title, currentInfo, updatedItemName, setItem, pattern, errorMessage, isRequired}) => {
  const [valid, setValid] = useState(true);
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;
    if (updatedItemName === 'phone')
      element.value = element.value.replace(/[^0-9]/g, '');
    setValid(pattern.test(e.currentTarget.value));
  }
  const onFocus = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.patternMismatch)
      e.currentTarget.setCustomValidity(errorMessage);
  }
  const onBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newData = pattern.test(e.currentTarget.value) ? e.currentTarget.value : '';
    const updatedItem = { ...currentInfo, [updatedItemName]: newData };
    if (JSON.stringify(currentInfo) !== JSON.stringify(updatedItem))
      setItem(updatedItem);
  }

  return (
    <div className='sign-input'>
      <label className='sign-input__title' htmlFor={updatedItemName}>{title}</label>
      <input 
        type={updatedItemName === 'email' ? 'email' : 'text'} 
        id={updatedItemName} 
        className='sign-input__box'
        pattern={pattern.source}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={isRequired}
        placeholder={updatedItemName === 'phone' ? '010' : ''}
      />
      {!valid && <label className='sign-input__error' htmlFor={updatedItemName}>{errorMessage}</label>}
    </div>
  )
}

export default SignUpInput