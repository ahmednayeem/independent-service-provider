import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault()
    }

     
    return (
        <div className='container mx-auto from'>
            <h2 className='text-center fs-1 headerlogin'>Please Register</h2>
    <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>User Id</Form.Label>
    <Form.Control className='mb-3'  type="email" placeholder="Enter Id"/>
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required />
  </Form.Group>
  <Button className='loginbutton' type="submit">
    Submit
  </Button>
</Form>

<p className='mt-3 fs-5'>Already have an account? <Link to="/login" className='text-danger' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;