import { user } from '../type/userInfo'

export const emailReg = RegExp(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/);
export const passwordReg = RegExp(/(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,42}/);
export const phoneReg = RegExp(/(010[0-9]{7,8})/);
export const userNameReg = RegExp(/[a-z|A-Z]{2,10}/)

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
           && user.requiredAgreement );
}