import React, {useState} from 'react'
import { user } from '../../type/userInfo'
import '../../css/signUpInput.css'

type ItemProps = {
  title: string,
  currentInfo: user;
  updatedItemName: string;
  setItem: (a:user) => void;
  validator: (a:string) => boolean;
  errorMessage: string;
}

const SignUpInput :React.FC<ItemProps> = ({title, currentInfo, updatedItemName, setItem, validator, errorMessage}) => {
  const [valid, setValid] = useState(true);
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const updateItem = {  [updatedItemName]: e.currentTarget.value };
    setItem({ ...currentInfo, ...updateItem });
    if (validator(e.currentTarget.value))
      setValid(true);
  }
  const onFocus = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValid(true);
  }
  const onBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValid(validator(e.currentTarget.value));
  }
  return (
    <div className='sign-input'>
      <label className='sign-input__title' htmlFor={updatedItemName}>{title}</label>
      <input type='text' onBlur={onBlur} onChange={onChange} onFocus={onFocus} id={updatedItemName} className='sign-input__box'></input>
      <label className='sign-input__error' htmlFor={updatedItemName}>{!valid && errorMessage}</label>
    </div>
  )
}

export default SignUpInput