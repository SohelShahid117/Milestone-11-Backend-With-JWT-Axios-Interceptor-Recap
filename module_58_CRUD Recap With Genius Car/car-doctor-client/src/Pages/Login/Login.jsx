import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Providers/Authproviders";
import axios from "axios";

const Login = () => {
  const { signInUser } = useContext(authContext);
  console.log(signInUser);

  const location = useLocation();
  console.log(location)

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hi");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    signInUser(email, password)
      // .then(result=>console.log(result.user))
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        
        const user = {email}
        // axios.post("http://localhost:5000/jwt",user)
        axios.post("http://localhost:5000/jwt",user,{withCredentials:true})
        // .then(data=>console.log(data.data))
        .then(data=>{
          console.log(data.data)
          if(data.data.success){
            navigate(location?.state ? location.state : "/")
          }
        })
        // navigate(location?.state ? location.state : "/")
      })
      .catch((err) => console.log(err));
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
          <h1 className="text-4xl font-bold p-5 text-center">Login now!</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Sign In</button> */}
              {/* <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5"> */}
              <input
                type="submit"
                value="Sign In"
                className="input btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:text-white mr-5"
              />
            </div>
          </form>
          <p className="py-5 text-center">
            New to Car Doctors?go to{" "}
            <Link to="/signUp" className="font-bold text-[#FF3811]">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
