import './App.css';
import profile from "./images/profile.jpeg";
import email from "./images/email.jpeg";
import password from "./images/password.jpeg";
function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder='user name' className='name'/>
            </div>
            <div className='second-input'>
              <img src={password} alt="password" className="email"/>
              <input type="password" placeholder='user name' className='name'/>
            </div>
            <div className='login-button'>
            <button>Login</button>
            </div>
              <p className='link'>
                <a href='#'>Forgot Password?</a> Or <a href='#'>Sign Up</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;