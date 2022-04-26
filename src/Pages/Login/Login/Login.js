import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      if(user){
          navigate('/home')
      }
    
     const handleSubmit = event => {
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;

         signInWithEmailAndPassword(email, password)
     }
    
     const navigateRegister = event => {
        navigate('/register');
     }


    
    return (
        <div className='container mx-auto from'>
            <h2 className='text-center fs-1 headerlogin'>Login</h2>
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button className='loginbutton' type="submit">
    Login
  </Button>
</Form>
<p className='mt-3 fs-5'>New here? <Link to="/register" className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;