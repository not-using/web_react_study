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
    setValid(validator(e.currentTarget.value));
  }
  const onBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newData = validator(e.currentTarget.value) ? e.currentTarget.value : "";
    const updatedItem = { ...currentInfo, [updatedItemName]: newData };
    if (JSON.stringify(currentInfo) !== JSON.stringify(updatedItem))
      setItem(updatedItem);
  }

  return (
    <div className='sign-input'>
      <label className='sign-input__title' htmlFor={updatedItemName}>{title}</label>
      <input type='text' onBlur={onBlur} onChange={onChange} id={updatedItemName} className='sign-input__box'></input>
      {!valid && <label className='sign-input__error' htmlFor={updatedItemName}>{errorMessage}</label>}
    </div>
  )
}

export default SignUpInput