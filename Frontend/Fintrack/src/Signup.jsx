import React,{useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'
import axios from 'axios';
const Signup=()=>{
    const [res,setRes]=useState();
    const username=useRef();
    const password=useRef();
    const post_data=()=>{
        postEx();
    }
    const postEx = async () => {
            const response = await axios.post("http://localhost:9000/signup", {
                "username": username.current.value,
                "password": password.current.value
            });
            
            if (response.status === 200) {
                setRes("New User has been added Successfully!");
            } else {
                setRes("User Registration failed");
            } 
    };
    return(<React.Fragment>
        <div className="signup-container">
            <div className="signup-interior">
                <div className="login-content">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please log in with your personal info</p>
                    <Link to="/signin"><button>SIGN IN</button></Link>
                </div>
                <div className="register-content">
                    <h1>Create Account</h1>
                    <p className="result">{JSON.stringify(res)}</p>
                    <input type="text" ref={username} id="" placeholder='Username' autoFocus/>
                    <br />
                    <input type="password" ref={password} id="" placeholder='Password'/>
                    <p>Already have an account?</p>
                    
                    
                    <button onClick={post_data}>SIGN UP</button>
                </div>
                
            </div>
        </div>
    </React.Fragment>);
}
export default Signup;