import React from 'react';
import './Blogs.css'


const Blogs = () => {
    return (
        <div className='blogs'>
       <div className='blog'>
           <h2>What Is The Difference Between Authorization And Authentication</h2>
           <p><span className='fs-5'>Ans: </span> Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas.</p>
       </div>
       <div className='blog'>
           <h2>What other services does firebase provide other than authentication</h2>
           <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.</p>
       </div>
    </div>
    );
};

export default Blogs;