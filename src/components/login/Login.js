import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../login/LoginStyles.css';

import { auth, app } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useAuthContext} from '../../context/authContext';
 


const Login = () =>{
    const {toggleAuth} = useAuthContext()

  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const navigate = useNavigate('');
  const [errors, setErrors] =   useState({})


const signIn = (e) => {
    e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    // Signed in 
    //console.log (userCredential)
    alert('login successful')
    toggleAuth()
    navigate('/home')

   
    // ...
  })
  .catch((error) => {

    const validationErrors = {}


    if(!email.trim()) {
        validationErrors.email = "registered email required"
    } else if(!/\S+@\S+\.\S+/.test(email)){
        validationErrors.email = "registered email not valid"
    }
  
    if(!password.trim()) {
        validationErrors.password = "registered password required"
    } else if(password.length < 6){
        validationErrors.password = "registered password must be atleast 6 character"
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0) {
    }
    alert('email and password invalid')
   // console.log (error)

  });

}
    return (
        <div className="login">
        <div className="container">
        <div className="form-container">
            <form onSubmit={signIn}>
                <h1><span>Login</span> Page</h1>
                <div>
                    <label>email</label>
                    <input type="email" name="email" placeholder="registered email" 
                    value={email} onChange={(e)=>setEmail(e.target.value) } />
                    {errors.email && <span className="error">{errors.email}</span>}

                </div>
                <div>
                    <label> password</label>
                    <input type="password" placeholder="registered password" name="password"
                    value={password} onChange={(e)=>setPassword(e.target.value) } />
                    {errors.password && <span className="error">{errors.password}</span>}

                </div>
               

                <button>Login</button>
                <p>Create a new account <Link to="/signup"><span>Sign up</span></Link></p>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Login;