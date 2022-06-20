import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login=()=>{

    return(
        <div className='login-body'>
             <form className='login-form'>
                <div className='heading'>
                    <h1>Login</h1>
                </div>

                <div className='form-input'>
                    <input type="email" placeholder='emailId' name='emailId' id='emailId' />
                    <input type="password" placeholder='password' name='password' id='password' />
                    <button >Login</button>
                </div>

                <div className='login-footer'>
                    <label>If you don't have an Account <Link className='login-link' to='/register'>Register</Link> &nbsp; here </label>
                </div>


            </form>
            
        </div>
    )

}

export default Login;