import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {startLoginEmailPassaword, startLoginGoogle } from '../../actions/auth';
import {useForm} from '../../Hooks/useForm';
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';


export const LoginScreen = () => {
    
    
    const {msgError, loading} = useSelector( state => state.ui);
    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    
    const {email, password} = values;
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValio()){
            dispatch(startLoginEmailPassaword(email, password));
        }
    }

    const handleGoogleLogin = () =>{
            dispatch(startLoginGoogle()) 
    }

    const isFormValio  = () => {

      if (!validator.isEmail(email)) {
         dispatch(setError('Email no is valid'));
         return false
 
        }else if(password.length < 5 ){
         dispatch(setError('The password you’ve entered is incorrect. '));
         return false
        }
 
        dispatch(removeError());
        return true
         
     }


    return (
        <>
            <h2 className="auth__title">Login</h2>
            <form onSubmit={handleLogin}>
            {
                msgError !== null && (
                <div className='auth__alert-error'>
                    {msgError}
                </div>
            )
            }
                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={email}
                />
                <input 
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    onChange={handleInputChange}
                    value={password}
                />
                <button  type='submit' className="btn btn-primary btn-block" disabled={loading}>
                    Login
                </button>
                <hr />
                <div className='auth__social-networks'>
                    <p>Login With Social Networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
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
