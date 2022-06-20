import React from 'react';
import { Link } from 'react-router-dom';

const Register =()=>{

    
    return(
        <div className='register-body'>
            <form className='register-form'>
                <div className='heading'>
                    <h1>Register</h1>
                </div>

                <div className='from-input'>
                    <input type="text" placeholder='username' name='username' id='username' />
                    <input type="email" placeholder='emailId' name='emailId' id='emailId' />
                    <input type="password" placeholder='password' name='password' id='password' />
                    <input type="password" placeholder='confirm password' name='confirmPassword' id='confirmPassword' />
                    <input type="number" placeholder='mobile number' name='mobile' id='mobile' />
                    <button >Register</button>
                </div>

                <div className='register-footer'>
                    <label>If you have an Account <Link className='login-link' to='/login'>Login</Link> &nbsp; here </label>
                </div>


            </form>
            
        </div>
    )
}

export default Register;