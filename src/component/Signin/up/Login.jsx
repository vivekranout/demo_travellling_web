import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./login.css";
import HeadTitle from '../../HeadTitle/HeadTitle'
import Footer from '../../Footer/Footer'
const Login = () => {
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
e.preventDefault();
console.log(user, pwd);
setUser('');
setPwd('');
setSuccess(true);
    }
    return (
        <>
        <HeadTitle/>
            {success ? (
              <div className='sctt'>
                <section className='sct'>
                  
                    <h1> Log-IN Succesfully!</h1>
                    <img src='./imgs/smily.jpg' />
                    <p className='bck'>
                        <a href="/">Go to Home</a>
                    </p>
                 
                
                
                </section>
                
                </div>
            ) : (
                <div className='body'>
                  <div className='login'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h3>Log In</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='login-butn'>Sign In</button>
                        <span className='signup-link'>Don't have an account? <Link to='/signup'>SignUp</Link></span>
         
                    </form>
                    
          <div class="social">
          <div class="go"><i><GoogleIcon/></i>Google</div>
          <div class="fb"><i><FacebookIcon/>Facebook</i></div>
        </div>
                </div>    
                </div>
            )}
            <Footer/>
        </>
    )
}

export default Login