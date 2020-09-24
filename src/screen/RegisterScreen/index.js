import React from 'react'
import {Link} from 'react-router-dom'
export const RegisterScreen = () => {
    return (
        <>
        <h2 className="auth__title">Login</h2>
        <form>
        <input 
                type='text'
                placeholder='Name'
                name='name'
                className='auth__input mb-1'
                autoComplete='off'
            />
            <input 
                type='text'
                placeholder='Email'
                name='email'
                className='auth__input mb-1'
                autoComplete='off'
            />
            <input 
                type='password'
                placeholder='Passaword'
                name='passaword'
                className='auth__input'
            />
            <input 
                type='password'
                placeholder='Confirm passaword'
                name='password2'
                className='auth__input mb-1'
            />
            <button  type='submit' className="btn btn-primary btn-block mb-5" >
                Register
            </button>
            <Link to='/auth/login' className="link">
                Allready registered ?
            </Link>
        </form>
    </>
    )
}
