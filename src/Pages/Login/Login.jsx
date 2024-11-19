import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const emailRef=useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        toast.success('Successfully logged in!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Failed to login. Please try again.');
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success('Successfully logged in with Google!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Failed to login with Google. Please try again.');
      });
  };

  const handleForgetPassword=()=>{
    console.log('give email',emailRef.current.value);
    const email=emailRef.current.value;
    if (!email) {
      console.log('please provide a valid email address');
      
    }
    else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        alert('Password reset email sent,please check your email')
      })
    }
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-base-200 py-5">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">Login to your account</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
              ref={emailRef}
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                name="password"
                type={showPassword?'text':'password'}
                placeholder="Enter your password"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                required
              />
              <button 
              onClick={()=>{setShowPassword(!showPassword)}}
              className="btn btn-xs absolute right-2 top-12">
                {
                  showPassword?<FaEyeSlash />:<FaEye />
                }
                </button>
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-none btn-outline border-gray-300">Login</button>
              {error && <p className="text-red-700 py-2">{error.split('/')[1].replace(/\)\.$/, '')}</p>}

              <p className="my-3 mx-auto font-bold">or,</p>
              <button
                onClick={googleLoginHandler}
                type="button"
                className="btn rounded-none btn-outline border-gray-300"
              >
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Don’t Have An Account?{" "}
            <Link className="text-[#F75B5F]" to="/pages/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
