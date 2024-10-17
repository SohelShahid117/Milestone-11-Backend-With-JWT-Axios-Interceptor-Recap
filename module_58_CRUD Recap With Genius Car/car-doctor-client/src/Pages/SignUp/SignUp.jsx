import React, { useContext } from 'react';
import login from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/Authproviders';

const SignUp = () =>{
    const {createUser} = useContext(authContext);
    console.log(createUser);


    const handleSignUp = (e) =>{
        e.preventDefault();
        console.log("hi")

        const form = e.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form,name,email,password);

        createUser(email,password)
        // .then(result=>console.log(result.user))
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err=>console.log(err))
    };


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left w-1/2">
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p> */}
            <img src={login} alt="" srcset="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold p-5 text-center">Sign Up</h1>
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" name="username" placeholder="username" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="confirm password" className="input input-bordered" required />
            
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Sign In</button> */}
                {/* <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5"> */}
                <input type='submit' value="Sign Up" className="input btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5"/>
              </div>
            </form>
            <p className='py-5 text-center'>Already have an account?go to <Link to="/login" className='font-bold text-[#FF3811]'>Login</Link> </p>
        
          </div>
        </div>
      </div>
    );
};

export default SignUp;