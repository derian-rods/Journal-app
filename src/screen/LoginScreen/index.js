import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h2 className="auth__title">Login</h2>
            <form>
                <input 
                    type='text'
                    placeholder='email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                />
                <input 
                    type='password'
                    placeholder='Passaword'
                    name='passaword'
                    className='auth__input'
                />
                <button  type='submit' className="btn btn-primary btn-block" >
                    Login
                </button>
                <hr />
                <div className='auth__social-networks'>
                    <p>Login With Social Networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to='/auth/register' className="link link-center">
                    Create new account
                </Link>
            </form>
        </>
    )
}
