/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './EmailLogin.Style';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import loginAPI from '../../api/emailLoginAPI';

const EmailLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [btnActive, setBtnActive] = useState(true);

  const handleData = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  };

  // 이메일 유효성 검사
  const handleEmailValid = () => {
    // const emailValue = e.target.value;
    // setEmail(emailValue);
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!reg.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      setEmailValid(false);
    } else if (email.length === 0) {
      setEmailError('입력해주세요.');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  };

  // 비밀번호 유효성 검사
  useEffect(() => {
    const handlePasswordValid = () => {
      // const passwordInputValue = e.target.value;
      // setPassword(passwordInputValue);
      if (password.length >= 6) {
        setPasswordValid(true);
        setPasswordError('');
      } else {
        setPasswordValid(false);
        setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      }
    };
    handlePasswordValid();
  }, [password]);

  // console.log(email, password);
  console.log(emailValid, passwordValid);
  // console.log(emailError, passwordError);
  console.log(password.length);

  // 로그인 버튼 활성화
  const handleButtonActive = () => {
    return emailValid && passwordValid
      ? setBtnActive(false)
      : setBtnActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAPI(email, password)
      .then((data) => {
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('accountname', data.user.accountname);
        localStorage.setItem('profileImg', data.user.image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.LoginSec>
      <S.LoginTit>로그인</S.LoginTit>
      <form onSubmit={handleSubmit}>
        {/* {emailValid ? (
          <InputBox
            label='이메일'
            placeholder='이메일 주소를 입력해주세요'
            id='email'
            type='email'
            // 여기 바꿨음 valid 였음
            onChange={handleData}
            onBlur={handleButtonActive}
            value={email}
          />
        ) : ( */}
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          onChange={handleEmailValid}
          onBlur={handleButtonActive}
          value={email}
          buttonColor={emailValid ? null : 'red'}
          display={emailValid ? null : 'yes'}
          message={emailError}
        />
        {/* )} */}
        {passwordValid ? (
          <InputBox
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            id='password'
            type='password'
            // minLength='6'
            // 여기도 바꿨음 밸리드였음
            onChange={handleData}
            onBlur={handleButtonActive}
            value={password}
          />
        ) : (
          <InputBox
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            id='password'
            type='password'
            // minLength='6'
            buttonColor='red'
            display='yes'
            message={passwordError}
            onChange={handleData}
            // onBlur={handleButtonActive}
            value={password}
          />
        )}
        <Button
          type='submit'
          size='lg'
          tit='로그인'
          // onClick={handleClick}
          isActive={btnActive}
          disabled={emailValid && passwordValid ? null : 'disabled'}
          message={passwordError}
        />
      </form>
      <S.SignUpTxt type='button'>
        <Link to='/signUp'>이메일로 회원가입</Link>
      </S.SignUpTxt>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
