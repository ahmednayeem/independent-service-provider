import { async } from '@firebase/util';
import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
  auth
);


      if(user){
          navigate(from, { replace: true})
      }


      if (error) {
        errorElement= <p className='text-danger text-center fw-bold'>Error: {error?.message}</p>  
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


     const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');
     }

    
    return (
<div>
  <div>
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
  <Button className='loginbutton d-block mx-auto' type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p className='mt-3 fs-5'>New here? <Link to="/register" className='text-primary' onClick={navigateRegister}>Please Register</Link></p>

<p className='mt-3 fs-5'>Forget Password? <Link to="/register" className='text-danger fw-bold' onClick={resetPassword}>Reset Password</Link></p>
<SocialLogin></SocialLogin>
        </div>
  </div>



</div>
       
    );
};

export default Login;