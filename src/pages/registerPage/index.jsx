import './style.css'
import Header from "../../components/header";
import RegisterForm from "../../components/registerForm"

function RegisterPage() {

  return (
    <>
      <Header />
      <div className='form_container'>
        <RegisterForm />
      </div>
    </>
  )
}

export default RegisterPage