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
  const onChangeItem = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const updateItem = {  [updatedItemName]: e.currentTarget.value };
    setItem({ ...currentInfo, ...updateItem });
    setValid(validator(e.currentTarget.value));
  }  
  return (
    <div className="sign-input">
      <span className="sign-input__title">{title}</span>
      <input type="text" onChange={onChangeItem}  className="sign-input__box"></input>
      <p className="sign-input__error">{!valid && errorMessage}</p>
    </div>
  )
}

export default SignUpInput