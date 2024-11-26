import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin');
    };

    return (
        <div className="main-container">
            <h2>Login</h2>
            <form>
                <div className="text-input-container">
                    <label htmlFor="username">Family name</label>
                    <input type="text" id='username' placeholder='Enter your family name'/>
                </div>

                <div className="text-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your password'/>
                </div>

                <div className="button-container">
                    <button type='submit' className='main-button'>Login</button>
                    <button 
                        type='button' 
                        className='main-button'
                        onClick={handleSignInClick}
                    >
                        Go to Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;