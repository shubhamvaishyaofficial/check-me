import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { auth } from './firebase';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                navigate('/contact')
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <div>
            {/* <div className="wrapper">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Twitter
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">

                        <input type="Email" name="Email" id="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-field d-flex align-items-center">

                        <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn mt-3" onClick={submit}>Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="#">Forget password?</a> or <Link to='/signup'>Sign up</Link>
                </div>
            </div> */}
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>
                <label for="username">Email</label>
                <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={submit}>Log In</button>
                <a href="#">Forget password?</a> or <Link to='/signup'>Sign up</Link>

            </form>
        </div>
    )
}

export default Login
