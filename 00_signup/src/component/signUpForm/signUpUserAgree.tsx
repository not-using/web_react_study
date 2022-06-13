import React, { useState } from 'react'
import { user } from '../../type/userInfo'

const termMessage = `이 페이지는 페이지 구현 연습용일 뿐입니다`;
const privacyMessage = `개인정보를 수집하지는 않지만 반드시 동의해주셔야 합니다`;
const marketingMessage = `마케팅 용도로 연락드릴 수도 있는 선택 약관입니다`;

type signUpAgreeProps = {
  currentInfo: user;
  setItem: (a:user) => void;
}

const SignUpUserAgree:React.FC<signUpAgreeProps> = ({currentInfo, setItem}) => {
  const [termAgree, setTermAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [marketingAgree, setMarketingAgree] = useState(false);

  const allChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = termAgree && privacyAgree && marketingAgree ? false : true;
    setTermAgree(value);
    setPrivacyAgree(value);
    setMarketingAgree(value);
    setItem({ 
      ...currentInfo, 
      requiredAgreement : value, 
      optionalAgreement: value
    });
  }
  const onChangeTermAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((!termAgree && privacyAgree) !== currentInfo.requiredAgreement) 
      setItem({ 
        ...currentInfo, 
        requiredAgreement: (!termAgree && privacyAgree) 
      });
    setTermAgree(!termAgree);
  }

  const onChangePrivacyAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((termAgree && !privacyAgree) !== currentInfo.requiredAgreement) 
      setItem({ 
        ...currentInfo, 
        requiredAgreement: (termAgree && !privacyAgree) 
      });
    setPrivacyAgree(!privacyAgree);
  }

  const onChangeMarketingAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ 
      ...currentInfo, 
      optionalAgreement: !marketingAgree 
    });
    setMarketingAgree(!marketingAgree);
  }
  return (
    <div className='sign-agree'>
        <p>※ 서비스 약관 동의 (필수)
        
        <label htmlFor='all' className='sign-agree__all'>
          <input type='checkbox' id='all' checked={termAgree && privacyAgree && marketingAgree} onChange={allChecked}/>모두 동의
          </label>
          </p> 
        <label htmlFor='term' className='sign-agree__check'>
          <input type='checkbox' id='term' checked={termAgree} onChange={onChangeTermAgreement}/>{termMessage}
        </label>
        <label htmlFor='privacy' className='sign-agree__check'>
          <input type='checkbox' id='privacy' checked={privacyAgree} onChange={onChangePrivacyAgreement}/>{privacyMessage}
        </label>
        <p>※ 마케팅 용도 개인정보 제공 동의</p>
        
        <label htmlFor='marketing' className='sign-agree__check'>
          <input type='checkbox' id ='marketing' checked={marketingAgree} onChange={onChangeMarketingAgreement}/>{marketingMessage}
        </label>
    </div>
  )
}

export default SignUpUserAgree