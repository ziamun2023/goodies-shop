import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';

const Signin = () => {
    const {userSignin}=useContext(AuthContext)


    // const [error,setError]=useState('')
    
    


    const handleSubmit=(event)=>{
        event.preventDefault();
       const form=event.target
    //    const name=form.name.value;
       const password=form.password.value;
    //    const confirm=form.confirm.value;
       const email=form.email.value;
    
       console.log(password,email)
       
     
       userSignin(email,password)
       .then(result=>{
        const userLogged=result.user
        console.log(userLogged)
        // handleSave()
      
       })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  {/* <Lottie style={{width:400}} className='mx-auto ' animationData={groovyWalkAnimation} loop={true} />  */}
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSubmit} className="card-body">

 
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
          

      {/* <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />

  {selectedImage && (
    <div>
      <img src={imageURL} alt="Selected" width="200" height="200" />
    </div>
  )}

  </div> */}
  {/* <button onClick={handleSave}>Save Profile Picture</button> */}
  
    
    </div>
    {/* <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered" />
    </div> */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" name='email' placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" />
      {/* <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label> */}
    </div>
  
    <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit"  value='submit'/>
    </div>
  </form>
  {/* <p className='text-red-800'>{error}</p> */}
</div>
</div>
</div>
    </div>
    );
};

export default Signin;