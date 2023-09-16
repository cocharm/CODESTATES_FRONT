import './style.css'
import Header from "../../components/header";
import LoginForm from "../../components/loginForm"


function LoginPage() {


  return (
    <>
      <Header />
      <div className="login_container">
        <div className="login_info">
          <div className="login_form_section">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage