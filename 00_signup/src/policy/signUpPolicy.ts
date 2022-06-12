import { user } from '../type/userInfo'

const emailReg = RegExp(/^[0-9a-zA-Z]\w*@[0-9a-z]\w*\.[a-z]{2,3}$/);
const passwordReg = RegExp(/[\w!@#$%^&*.]{8,42}/);
const phoneReg = RegExp(/\d{2,3}[- ]?\d{3,4}[- ]?\d{4}/);
const userNameReg = RegExp(/\w{2,10}/)

export const emailValidator = (email: string) => {
  return emailReg.test(email);
}

export const passwordValidator = (password:string) => {
  return passwordReg.test(password);
}

export const userNameValidator = (name:string) => {
  return userNameReg.test(name);
}

export const phoneValidator = (phone:string) => {
  return phoneReg.test(phone);
}

export const signUpSubmitValidator = (user:user) => {
  return ( emailValidator(user.email) 
           && passwordValidator(user.password) 
           && phoneValidator(user.phone) 
           && userNameValidator(user.userName) 
           && user.pwCheck 
           && user.agreement1 );
}