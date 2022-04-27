import React from 'react';
import './SocialLogin.css'
import google from '../../Login/SocialLogin/img/google.png';
import github from '../../Login/SocialLogin/img/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {

   
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement=
            <p className='text-danger text-center fw-bold'>Error: {error?.message} {error1?.message}
            </p>
      }

      if(user || user1){
          navigate('/home')
      }


    return (
       <div>
            <div className='text-center m-4 d-flex align-items-center'>
            <div style={{height: '2px'}} className='color w-50 '></div>
                <p className=' fs-4 mt-2 px-2'>or</p>
                <div style={{height: '2px'}} className='color w-50'></div>
            
        </div>
        {errorElement}
        <div>
            <button  onClick={() => signInWithGoogle()} className='socialButton'>
            <img src={google} className="googleIcon"  alt="" />
                Google Sign In 
         
            </button>
            <button onClick={() => signInWithGithub()} className='socialButton github my-3'>
            <img src={github} className="googleIcon git"  alt="" />
                Github Sign In 
         
            </button>
        </div>
       </div>
    );
};

export default SocialLogin;