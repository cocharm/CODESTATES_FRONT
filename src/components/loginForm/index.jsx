import React, { useState } from 'react';
import './style.css'
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,

    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://moviestates-alternative.codestates-seb.link/auth/login/admin', formData);
      console.log("로그인 성공", response.data);
    } catch (error) {
      console.error("로그인 중 에러 발생", error);
    }

  };



  return (
    <>
      <div className='login_form_box'>
        <div className="login_title">
          로그인
        </div>
        <form className='input_section' onSubmit={handleSubmit}>
          <div className="email_section">
            <input type='email' name='email' value={formData.email} placeholder='이메일을 입력하세요' onChange={handleInputChange} />
          </div>
          <div className='password_section'>
            <input type='password' name='password' value={formData.password} placeholder='비밀번호를 입력하세요' onChange={handleInputChange} />
          </div>
          <button className='login_button' type='submit'>로그인</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm