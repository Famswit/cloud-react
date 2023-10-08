import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../signup/SignupStyles.css'
 


const Signup = () =>{

  const [formData, setFormData] =  useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

  })

  const [errors, setErrors] =   useState({})

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }
 
  const  formSubmitHandler = (event) => {
    event.preventDefault();
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password must be atleast 6 character"
    }

    if(!formData.email.trim()) {
        validationErrors.confirmPassword = "email is required"
    } else if(formData.confirmPassword !== formData.password){
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form submitted successfully")
    }
  }

    return (
        <div className="signup">
        <div className="container">
        <div className="form-container">
            <form onSubmit={formSubmitHandler}>
                <h1><span>Signup</span> Page</h1>
                <div>
                    <label>Name</label>
                    <input type="text" name="username" placeholder=" username" onChange={handleChange} />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div>
                    <label> Email</label>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}

                </div>
                <div>
                    <label> Password</label>
                    <input type="password" name="password" placeholder="password" onChange={handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}

                </div>
                <div>
                    <label> Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                </div>
               

                <button> Submit</button>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Signup;