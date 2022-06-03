import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  let navigate = useNavigate();
  const goSignUp = () => {
    navigate("/signup");
  }
  return (
    <main className='welcome'>
      <button onClick={goSignUp}>회원가입하기</button>
    </main>
  );
};

export default Welcome;
