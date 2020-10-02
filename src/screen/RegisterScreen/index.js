import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {


    const dispatch = useDispatch()
    const {msgError, loading} = useSelector( state => state.ui);
    console.log(msgError)

    const [value, handleInputChange  ] = useForm({
        name:'',
        email: '',
        password:'',
        password2: ''
    })
    
    const {name, email, password, password2} = value

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValio()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
        
    }   

    const isFormValio  = () => {
       if(name.trim().length === 0 || name.trim().lenth <= 2){
        dispatch(setError('Name is require'));
        return false

       }else if (!validator.isEmail(email)) {
        dispatch(setError('Email no is valid'));
        return false

       }else if(password !== password2 || password.length < 5 ){
        dispatch(setError('Password should be at least 6 characters and match each other'));
        return false
       }

       dispatch(removeError());
       return true
        
    }

    return (
        <>
        <h2 className="auth__title">Login</h2>
        <form onSubmit={handleRegister}>
            {
                msgError !== null && (
                <div className='auth__alert-error'>
                    {msgError}
                </div>
            )
            }
        <input 
                type='text'
                placeholder='Name'
                name='name'
                className='auth__input mb-1'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
            <input 
                type='text'
                placeholder='E-mail'
                name='email'
                className='auth__input mb-1'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}

            />
            <input 
                type='password'
                placeholder='Password'
                name='password'
                className='auth__input'
                value={password}
                onChange={handleInputChange}

            />
            <input 
                type='password'
                placeholder='Confirm passaword'
                name='password2'
                className='auth__input mb-1'
                value={password2}
                onChange={handleInputChange}
            />
            <button  type='submit' className="btn btn-primary btn-block mb-5" disabled={loading} >
                Register
            </button>
            <Link to='/auth/login' className="link">
                Allready registered ?
            </Link>
        </form>
    </>
    )
}
