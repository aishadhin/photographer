import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/register');
    }

    if(user){
        navigate('/')
    }

    const emailSign = event =>{
        setEmail(event.target.value)
    }
    const passwordSign = event =>{
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
    }


    return (
        <div className='container my-5 p-2 border w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-primary'>Please Login</h2>
                <div class="form-group my-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={emailSign} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group my-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input onBlur={passwordSign} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" class="btn btn-primary">Login</button>
            </form>
            <small className='d-block text-primary text-center'>OR</small><br />
            <button className='btn btn-primary w-100'>Signin With Google</button>
            <p className='mt-3 text-primary'>Haven't any account? <span role='button' className='text-danger' onClick={navigateLogin}>Please Register.</span></p>
        </div>
    );
};

export default Login;