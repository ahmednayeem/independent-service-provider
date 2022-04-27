import { async } from '@firebase/util';
import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

      if(loading || sending){
           return <Loading></Loading>
      }


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
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
         toast('please enter your email address');
       }
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

<p className='mt-3 fs-5'>Forget Password? <button className='text-danger btn btn-link text-decoration-none fs-5 fw-bold' onClick={resetPassword}>Reset Password</button></p>
<SocialLogin></SocialLogin>
<ToastContainer />
        </div>
  </div>



</div>
       
    );
};

export default Login;