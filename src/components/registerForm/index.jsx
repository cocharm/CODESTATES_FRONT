import './style.css'
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repassword: '',
    name: '',
    nickname: '',
    birthdate: '',
    yy: '',
    mm: '',
    dd: '',
  });

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

const isValidPassword = (password) => {
  return password.length >= 8;
}

const isValidDate = (date) => {
  const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
}

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value,
  }));
};
  
const handleSubmit = (event) => {
  event.preventDefault();
  if (!isValidEmail(formData.email)) {
    alert("올바른 이메일 형식을 입력하세요!");
    return
  }
  if (!isValidPassword(formData.password)) {
    alert("비밀번호는 최소 8자 이상이어야 합니다.");
    return;
  }
  if (!isValidPassword(formData.birthdate)) {
    alert("생년월일은 yyyymmdd 형식으로 입력하세요.");
    return;
  }
}


  
  return (
    <>
      <div className='register_form_box'>
        <div className="register_title">
          회원가입
        </div>
        <form className='input_section'>
          <div className="email_section">
            <input type='email' name='email' placeholder='이메일을 입력하세요' />
          </div>
          <div className='password_section'>
            <input type='password' name='password' placeholder='비밀번호를 입력하세요' />
          </div>
          <div className='repassword'>
            <input type='password' name='repassword' placeholder='비밀번호를 확인하세요' />
          </div>
          <div className='name'>
            <input type='text' name='name' placeholder='이름을 입력하세요' />
          </div>
          <div className='nickname'>
            <input type='text' name='nickname' placeholder='닉네임을 입력하세요' />
          </div>
          <div className='birthdate'>
            생년월일
            <input type='text' name='yy' id='yy' placeholder='년(4자)' maxlength='4' />
            <input type='text' name='mm' id='mm' placeholder='월' maxlength='4' />    
            <input type="text" name='dd' id='dd' placeholder='일' maxlength='2' />
          </div>
          <button className='register_button' type='submit'>회원가입</button>
        </form>
      </div>
    </>
  )

}
export default RegisterForm