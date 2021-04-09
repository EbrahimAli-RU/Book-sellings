import React, { useState } from 'react'
import Button from '../../component/PrimaryButton'
import Input from '../../component/authInput/AuthInput'
import { userInputHandler } from '../../utils/inputHandler'


const signupObj = {
    userName: {
        value: '',
        error: false,
        message: ''
    },
    email: {
        value: '',
        error: false,
        message: ''
    },
    password: {
        value: '',
        error: false,
        message: ''
    },
    confirmPassword: {
        value: '',
        error: false,
        message: ''
    }
}

const SignUp = () => {
    const [signupData, setSignupData] = useState(signupObj)
    const inputHandler = (e) => {
        const newData = userInputHandler(e, signupData)
        setSignupData(newData)
    }

    const signupHandler = (e) => {
        e.preventDefault();
        console.log(signupData)
    }
    return (
        <div className='auth__container'>
            <h2 className='auth__container-title'>sign Up</h2>
            <Input type='text' value={signupData.userName.value} error={signupData.userName.error} message={signupData.userName.message} handler={inputHandler} name='userName' placeholder='User Name' />
            <Input type='text' value={signupData.email.value} error={signupData.email.error} message={signupData.email.message} handler={inputHandler} name='email' placeholder='E-Mail' />
            <Input type='password' value={signupData.password.value} error={signupData.password.error} message={signupData.password.message} handler={inputHandler} name='password' placeholder='Password' />
            <Input type='password' value={signupData.confirmPassword.value} error={signupData.confirmPassword.error} message={signupData.confirmPassword.message} handler={inputHandler} name='confirmPassword' placeholder='Confirm Password' />
            <Button handler={signupHandler} />
            <p>Already have Account?<a className='auth__container-forgot' href='/'>login</a></p>

        </div>

    )
}

export default SignUp;