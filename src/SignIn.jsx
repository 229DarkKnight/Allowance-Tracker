import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function SignIn() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="main-container">
            <h2>Sign In</h2>
            <form>
                <div className="text-input-container">
                    <label htmlFor="username">Family name</label>
                    <input 
                        type="text" 
                        id='username' 
                        placeholder='Enter your family name'
                    />
                </div>

                <div className="text-input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        placeholder='Enter your password'
                    />
                </div>

                <div className="text-input-container">
                    <label htmlFor="password-confirmation">Password Confirmation</label>
                    <input 
                        type="password" 
                        id='password-confirmation' 
                        placeholder='Enter your password confirmation'
                    />
                </div>

                <div className="button-container">
                    <button type='submit' className='main-button'>Sign In</button>
                    <button 
                        type='button' 
                        className='main-button'
                        onClick={handleLoginClick}
                    >
                        Go to Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;