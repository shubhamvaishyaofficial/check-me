import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from './firebase'
import './Login.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const navigate = useNavigate()

    const submit = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user.uid);
                navigate('/about')
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
            setUsername('')
    setEmail('')
    setPassword('')
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

                        <input type="text" name="userName" id="userName" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-field d-flex align-items-center">

                        <input type="Email" name="Email" id="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-field d-flex align-items-center">

                        <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn mt-3" onClick={submit}>Sign up</button>

                </form>
                <div className="text-center fs-6">
                    <a href="#">Forget password?</a> or <Link to='/login'>Login</Link>
                </div>
            </div> */}
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>
                <label for="name">Full Name</label>
                <input type="text" placeholder="Name" id="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label for="username">Email</label>
                <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={submit}>Sign Up</button>
                        <a href="#">Forget password?</a> or <Link to='/login'>Login</Link>

                    </form>
        </div>
    )
}

export default Signup
