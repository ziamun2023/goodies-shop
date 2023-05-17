import React from 'react';
import LottiePlayer from "../../../public/106680-login-and-sign-up.json";

const Signin = () => {
    return (
        <div>
             <h1 className="text-5xl font-bold mb-8">Login now!</h1>
            <div className="hero min-h-screen bg-base-200">
     
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left">
    
      <img className='rounded-2xl w-80 mx-10' src="../../../public/pexels-cottonbro-studio-3585089.jpg" alt="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signin;