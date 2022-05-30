import { user } from '../type/userInfo'

export const emailValidator = (email: string) => {
  if (!email.includes('@') || !email.includes('.'))
    return false;
  return true;
}

export const passwordValidator = (password:string) => {
    if (password.length < 8 || password.length > 20)
        return false;
    return true;
}

export const userNameValidator = (name:string) => {
  return true;
}

export const phoneValidator = (phone:string) => {
  return true;
}

export const signUpSubmitValidator = (user:user) => {
  if (!user.email || !user.password || !user.pwCheck || !user.phone || !user.userName || !user.agreement1)
    return false;
  return true;
}