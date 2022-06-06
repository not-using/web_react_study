import { useNavigate } from 'react-router-dom'
import '../css/welcome.css'

const Welcome = () => {
  let navigate = useNavigate();
  const goSignUp = () => {
    navigate('/signup');
  }
  return (
    <main className='welcome'>
      <button onClick={goSignUp} className='welcome__button'>회원가입하기</button>
    </main>
  );
};

export default Welcome;
