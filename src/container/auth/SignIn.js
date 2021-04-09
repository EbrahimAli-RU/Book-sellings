import React, { useState } from 'react'
import Input from '../../component/authInput/AuthInput'
import Button from '../../component/PrimaryButton'

const signinObj = {
    email: {
        value: '',
        error: false,
        message: ''
    },
    password: {
        value: '',
        error: false,
        message: ''
    }
}

const SignIn = () => {
    const [loginData, setLoginData] = useState(signinObj)

    const inputHandler = () => {

    }
    return (
        <div className='auth__container'>
            <h2 className='auth__container-title'>sign In</h2>
            <Input type='text' value={loginData.email.value} error={loginData.email.error} message={loginData.email.message} handler={inputHandler} name='email' placeholder='E-Mail' />
            <Input type='password' value={loginData.password.value.value} error={loginData.password.error} message={loginData.password.message} handler={inputHandler} name='password' placeholder='Password' />
            <input className='auth__container-remember' type='checkbox' /> Remember me
            <a className='auth__container-forgot' href='/'> forgot password?</a>
            <Button />
        </div>
    )
}

export default SignIn;