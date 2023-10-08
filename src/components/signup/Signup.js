import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../signup/SignupStyles.css'

import { auth, app } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
 


const Signup = () =>{


  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const [confirmpassword, setConfirmPassword] =  useState('');
  const navigate = useNavigate('');


  const [errors, setErrors] =   useState({})


const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, confirmpassword)
  .then((userCredential) => {
    navigate('/')

    alert('account created successful')

    // Signed in 
    console.log (userCredential)


    // ...
  })
  .catch((error) => {
    const validationErrors = {}
  
  if(!email.trim()) {
      validationErrors.email = "email is required"
  } else if(!/\S+@\S+\.\S+/.test(email)){
      validationErrors.email = "email not valid"
  }

  if(!password.trim()) {
      validationErrors.password = "password is required"
  } else if(password.length < 6){
      validationErrors.password = "password must be atleast 6 character"
  }

  if(confirmpassword !== password){
      validationErrors.confirmPassword = "password not matched"
  }

  setErrors(validationErrors)

  if(Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully")
  }

   // console.log (error)

    alert('email and password needed')

  });


  
}
    return (
        <div className="signup">
        <div className="container">
        <div className="form-container">
            <form onSubmit={signUp}>
                <h1><span>Register</span> Page</h1>
                <div>
                    <label>email</label>
                    <input type="email" name="email" placeholder="Enter your email" 
                    value={email} onChange={(e)=>setEmail(e.target.value) } />
                    {errors.email && <span className="error">{errors.email}</span>}

                </div>
                <div>
                    <label> password</label>
                    <input type="password" placeholder="password" name="password"
                    value={password} onChange={(e)=>setPassword(e.target.value) } />
                    {errors.password && <span className="error">{errors.password}</span>}

                </div>

                <div>
                    <label> confirm Password</label>
                    <input type="password" placeholder="password" name="confirmpassword"
                    value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value) } />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                </div>
               

                <button>Submit </button>
                <p>Already a user? <Link to="/"><span>Login</span></Link></p>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Signup;