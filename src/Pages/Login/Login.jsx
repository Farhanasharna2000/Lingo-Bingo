import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

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
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                required
              />
              <label className="label">
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
