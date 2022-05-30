import React, {useState} from 'react'

type signUpFormProps = {
    setName: (a:string) => void;
}

const SignUpForm: React.FC<signUpFormProps> = ({setName}) => {
    const [username, setUserName] = useState("");
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName(username);
    }
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeName}></input>
    </form>
  )
}

export default SignUpForm