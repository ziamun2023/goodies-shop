import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
const auth = getAuth(app);
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

// import firebase  from 'firebase/app';
// import 'firebase/auth';
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../../../public/106680-login-and-sign-up.json";

const Signup = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
  };
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [imageURL, setImageURL] = useState('');
    // const handleImageChange =(event) => {
    //     const file = event.target.files[0];
    //     setSelectedImage(file);
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //           setImageURL(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //       }
    // };

    // const githubProvider=new GithubAuthProvider()
    const googleProvider= new GoogleAuthProvider()


    const {createUserProfile}=useContext(AuthContext)


    const [error,setError]=useState('')
    const handleGoogleSignup=()=>{
      signInWithPopup(auth,googleProvider)
      .then(result=>{
          const loggedwithgoogle=result.user
          console.log(loggedwithgoogle)
          setUser(loggedwithgoogle)
          navigate(from,{replace: true} )
      })
      .catch(error=>{
          console.log(error)
      })
   }
    


    const handleSubmit=(event)=>{
        event.preventDefault();
       const form=event.target
       const name=form.name.value;
       const password=form.password.value;
       const confirm=form.confirm.value;
       const email=form.email.value;
    
       console.log(name,password,email,confirm)
       
       setError('')
       if(password !== confirm){
        setError('your password did not mathced')
        return
       }
       else if(password.length <6){
        setError('password must be 6 charecter')
        return
       }

       createUserProfile(email,password)
       .then(result=>{
        const userLogged=result.user
        console.log(userLogged)
        // handleSave()
      
       })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    
    }

    // const handleSave = () => {
    //     const user = firebase.auth().currentUser;
    
    //     if (user) {
    //       user.updateProfile({
    //         photoURL: imageURL,
    //       })
    //         .then(() => {
    //           console.log('Profile picture saved successfully.');
    //         })
    //         .catch((error) => {
    //           console.error('Error saving profile picture:', error);
    //         });
    //     }
    //   };
    
   

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
            <span className="label-text">Photo url</span>
          </label>
          <input type="file" onChange={handlePhotoChange} />
              

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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password" placeholder="password" name='confirm' className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit"  value='submit'/>
        </div>
      </form>
      <p className='text-red-800'>{error}</p>
      <div><button onClick={handleGoogleSignup} className='btn'>Google Signup</button></div>
      <p className='my-1'><b>Already have an account?</b> <Link to='/signin'> Log in !</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;