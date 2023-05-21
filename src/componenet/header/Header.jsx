import  { useContext } from 'react';

// import img6 from '../../../public/pexels-nikita-nikitin-15057238.jpg'
import { AuthContext } from '../../contextProvider/AuthProvider';

import React from 'react';
import { Link} from 'react-router-dom';



const Header = () => {
 
 const {user,userLogout}=useContext(AuthContext)
 
    return (
        <div>

           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a><Link to='/home'>Home</Link></a></li>
    
        <Link to='/allToy'> <li><a>All toys</a></li></Link>
        <Link to='/blogs'> <li><a>Blogs</a></li></Link>
        <Link to='/addnewtoy' ><li><a>Add Toys</a></li></Link>
        {
        user?.email ? <>
         <Link to='/mytoys' ><li><a>My toys</a></li></Link>
    </>:
         <Link to='/signup' ><li><a>register</a></li></Link>
     }
    
      </ul>
    </div>
    <img className='rounded-full lg:w-14 sm: w-5 ' src="../../../public/Joy.jpg" alt="" />  <a className="btn btn-ghost normal-case text-xl">JoyCar</a> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a><Link to='/home'>Home</Link></a></li>
  
      <Link to='/allToy'> <li><a>All toys</a></li></Link>
      <Link to='/blogs'> <li><a>Blogs</a></li></Link>
      <Link to='/addnewtoy' ><li><a>Add Toys</a></li></Link>
     {
        user?.email ? <>
         <Link to='/mytoys' ><li><a>My toys</a></li></Link>
    </>:
         <Link to='/signup' ><li><a>register</a></li></Link>
     }
   
     
    </ul>
  </div>
 {
    !user &&  <div className="navbar-end">
   <Link to='/signin'> <a className="btn">Sign in</a></Link>

  </div>
 }
 {
    user &&  <div className="dropdown dropdown-end">
    
    <div className="tooltip mx-2" data-tip={user?.displayName}>
<button className="btn btn-square rounded-full"><div className="avatar online">
<div className="w-12 rounded-full">
  <img src={user?.photoURL} />
</div>
</div></button>
</div>
    
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><button onClick={userLogout}>Logout</button></li>
    </ul>
  </div>
 }
  </div>


</div> 
     
    );
};

export default Header;