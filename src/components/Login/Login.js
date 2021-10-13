import React, {useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from '../Firebase/firebase.init';
import './Login.css';




initAuth();

const googleProvider = new GoogleAuthProvider();


const Login = () => {

    const [user, setUser] = useState({})
    const handleSignInGoogle =() =>{
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then( result =>{
            const {displayName, photoURL} = result.user;
            const signedInUser = {
                name: displayName,
                photo: photoURL
            };
            setUser(signedInUser);
        })
    }

    return (
        <div className="d-flex">
            <div>
                <div className="signBtn">
                    <button onClick={handleSignInGoogle} className="sign-in-btn">Sign in with Google</button> <br />
                    <button className="sign-in-btn-2">Sign in with Facebook</button>
                    <br />
                    {
                        user.name && <div>
                            <h2>Welcome {user.name}</h2>
                            <img src={user.photo} alt="" />
                            <h4>Please Login</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;