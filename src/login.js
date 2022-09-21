import { useState } from "react";
import './login.css';
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  
 
const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      alert();
      navigate("/");
      setEmail("");
      setPassword("");
    }
   };
const formValidation = () => {
    var emailErr = {};
    var passwordErr = {};
    let isValid = true;

     if (email.trim().length > 10) {
      emailErr.emailShort = "Email-Id is Required !";
      isValid = false;
    }
    if (email.trim().length < 7) {
      emailErr.emailShort = "Email-Id  is Required !";
      isValid = false;
    }
    if (password.trim().length > 10) {
      passwordErr.passwordShort = "Enter correct password !";
      isValid = false;
    }
    if (password.trim().length < 6) {
      passwordErr.passwordShort = "Enter the correct password !";
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return (
    <div>
    
      <main className="class-container">
       <div className="login-body">
       <div className="login-wrapper">
       <div className="login-container">
       <div className="login-box">
       <div className="login-left">
                
      </div>
       <div className="login-right">
       <div className="login-right-wrap">
        <h1 className="login__title">Login</h1>
       <div className="divider"></div>
      <form onSubmit={onSubmit}>
       <div className="formGroup col-sm-11 col-md-11">
                    
                     <input 
                          className="form-control f-m"
                          placeholder="Enter your Email-Id"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                         
                      </div>
                      {Object.keys(emailErr).map((key) => {
                        return (
                          <div style={{ color: "red", marginLeft: "10%" }}>
                            {emailErr[key]}
                          </div>
                        );
                      })}

                      <div className="formGroup col-sm-11 col-md-11 ">
                        <input
                          className="form-control f-m"
                          placeholder="Enter your password"
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      {Object.keys(passwordErr).map((key) => {
                        return (
                          <div style={{ color: "red", marginLeft: "10%" }}>
                            {passwordErr[key]}
                          </div>
                        );
                      })}

                      <div className="formGroup">
                        <div className="row">
                          <div className="col">
                            <button type="submit" className="submit__button">
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <p class="paragraph">
                        <Link to="/" className="new-password">
                          Forgot Password?
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;








