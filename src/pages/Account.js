import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Account() {
    const [user, setUser] = useState(false);
    
    useEffect(() => {
        if (!localStorage.getItem('email')) {
            setUser(false);
        } else {
            setUser(true);
        }
    }, []);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [dor, setDor] = useState('');

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        const login = async () => {
            try {
                const response = await axios.post('http://localhost:4000/user/login', { email, password });
                alert("User logged in successfully!");
                localStorage.setItem('email', response.data.data.email);
                localStorage.setItem('dob', formatDate(response.data.data.dob));
                localStorage.setItem('dor', formatDate(response.data.data.dor));
                setUser(true);
    
                setEmail('');
                setPassword('');
                setDob('');
                setDor('');
            } catch (error) {
                alert("Invalid credentials! Please try again. or Please verify your email.");
            }
        };
        login();
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const register = async () => {
            try {
                await axios.post('http://localhost:4000/user/register', { email, password, dob, dor, status: 0 });
                alert("User registered successfully! Please check your email for verification.");
                setEmail('');
                setPassword('');
                setDob('');
                setDor('');
            } catch (error) {
                alert("User already exists! Please login.");
            }
        };
        register();
    };

    return (
        <div>
            {
                user ? (
                    <div style={{ height: '100vh' }}>
                        <h1 style={{ textAlign: 'center' }}>Welcome to Sasta Khana</h1>
                        <h2 style={{ textAlign: 'center' }}>User Details</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ width: '50%', padding: '10px', border: '1px solid black', borderRadius: '10px' }}>
                                <p><strong>Email:</strong> {localStorage.getItem('email')}</p>
                                <p><strong>Date Of Birth:</strong> {localStorage.getItem('dob')}</p>
                                <p><strong>Date Of Registration:</strong> {localStorage.getItem('dor')}</p>
                            </div>
                            <p>
                                <button
                                    style={{ padding: '10px', margin: '10px', borderRadius: '10px', backgroundColor: 'red', color: 'white', border: 'none' }}
                                    onClick={() => {
                                        localStorage.removeItem('email');
                                        localStorage.removeItem('dob');
                                        localStorage.removeItem('dor');
                                        setUser(false);
                                    }}
                                >
                                    Sign Out
                                </button>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="login">
                        <div className="login-wrap">
                            <div className="login-html">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                                <label htmlFor="tab-1" className="tab">Sign In</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                                <label htmlFor="tab-2" className="tab">Sign Up</label>
                                <div className="login-form">
                                    <div className="sign-in-htm">
                                        <div className="group">
                                            <label htmlFor="email" className="label">Email address</label>
                                            <input
                                                id="email"
                                                type="text"
                                                className="input"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Password</label>
                                            <input
                                                id="pass"
                                                type="password"
                                                className="input"
                                                data-type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <input id="check" type="checkbox" className="check" defaultChecked />
                                            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                        </div>
                                        <div className="group">
                                            <input
                                                type="submit"
                                                className="button"
                                                value="Sign In"
                                                onClick={handleSignIn}
                                            />
                                        </div>
                                        <div className="hr"></div>
                                    </div>
                                    <div className="sign-up-htm">
                                        <div className="group">
                                            <label htmlFor="user" className="label">Email address</label>
                                            <input
                                                id="user"
                                                type="text"
                                                className="input"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="pass" className="label">Password</label>
                                            <input
                                                id="pass"
                                                type="password"
                                                className="input"
                                                data-type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="dob" className="label">Date Of Birth</label>
                                            <input
                                                id="dob"
                                                type="date"
                                                className="input"
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="dor" className="label">Date Of Registration</label>
                                            <input
                                                id="dor"
                                                type="date"
                                                className="input"
                                                value={dor}
                                                onChange={(e) => setDor(e.target.value)}
                                            />
                                        </div>
                                        <div className="group">
                                            <input
                                                type="submit"
                                                className="button"
                                                value="Sign Up"
                                                onClick={handleSignUp}
                                            />
                                        </div>
                                        <div className="hr"></div>
                                        <div className="foot-lnk">
                                            <p>Already had an account ? <a href="/account">Login</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
