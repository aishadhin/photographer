import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Register = () => {
    const [signInWithGoogle , user] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/login');
    }
    if(user){
        navigate('/')
    }
    const handleEblur = event => {
        setEmail(event.target.value);
    }
    const handlePblur = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }


    return (
        <div className='container my-5 p-2 border w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-primary'>Please Register</h2>
                <div class="form-group my-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleEblur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <div class="form-group my-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input onBlur={handlePblur} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <button onClick={() => createUserWithEmailAndPassword(email, password)} type="submit" class="btn btn-primary">Register</button>
            </form>
            <small className='d-block text-primary text-center'>OR</small><br />
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-100'>Continue With Google</button>
            <p className='mt-3 text-primary'>Already have an account? <span role='button' className='text-danger' onClick={navigateRegister}>Please Login.</span></p>
        </div>
    );
};

export default Register;