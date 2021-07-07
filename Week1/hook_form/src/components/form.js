import React, { useState } from 'react';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is required")
        }else if (e.target.value.length < 2){
            setFirstNameError("First name needs to be at least 2 characters")
        }else {
            setFirstNameError(null)
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last name is required")
        }else if (e.target.value.length < 2){
            setLastNameError("Last name needs to be at least 2 characters")
        }else {
            setLastNameError(null)
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required")
        }else if (e.target.value.length < 5){
            setEmailError("Email needs to be at least 5 characters")
        }else {
            setEmailError(null)
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required")
        }else if (e.target.value.length < 8){
            setPasswordError("Password needs to be at least 8 characters")
        }else {
            setPasswordError(null)
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Password is required")
        }else if (e.target.value !== password){
            setConfirmPasswordError("Passwords do not match")
        }else {
            setConfirmPasswordError(null)
        }
    }

    const onChange = (event) => {
        setInputs({ 
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div>
        <form >
            <h1>Enter Information</h1>
            <div className="formGroup">
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleFirstName} type="text" name="firstName" />
            {
                firstNameError ?
                <p>{firstNameError}</p> : ''
            }
            </div>
            <div className="formGroup">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleLastName} type="text" name="lastName" />
            {
                lastNameError ?
                <p>{lastNameError}</p> : ''
            }
            </div>
            <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail} type="text" name="email" />
            {
                emailError ?
                <p>{emailError}</p> : ''
            }
            </div>
            <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input onChange={handlePassword} type="password" name="password" />
            {
                passwordError ?
                <p>{passwordError}</p> : ''
            }
            </div>
            <div className="formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleConfirmPassword} type="password" name="confirmPassword" />
            {
                confirmPasswordError ?
                <p>{confirmPasswordError}</p> : ''
            }
            </div>
        </form>
        <div>
            <h2>Your Information</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        </div>
    );
};
export default Form;