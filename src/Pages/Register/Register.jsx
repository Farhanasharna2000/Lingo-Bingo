import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";

const Register = () => {
    const { handleRegister, manageProfile } = useContext(authContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        setError("")

        const name = e.target.name.value;
        const image = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conpassword = e.target.conpassword.value;

        if (password !== conpassword) {
            setError("Passwords didn't match")
            return
        }
        if (password.length < 6) {
            setError('Password must contain atleast 6 characters ')
            return
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must contain atleast one Lowercase letter ')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain atleast one Uppercase letter ')
            return
        }
        handleRegister(email, password)
            .then(() => {
                manageProfile(name, image)
                    .then(() => {
                        navigate('/');
                    });
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
                    <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Enter your Photo URL" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered rounded-none bg-[#F3F3F3]" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input name="conpassword" type="password" placeholder="Enter your password" className="input input-bordered rounded-none bg-[#F3F3F3]" required />

                        </div>
                        {
                            error && <p className="text-red-700">{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn rounded-none btn-neutral">Register</button>
                        </div>

                        <p className="text-center font-semibold">Already Have An Account ? <Link to='/pages/login' className="text-[#F75B5F]" >Login</Link></p>
                    </form>

                </div>

            </div>
        </>

    );
};

export default Register;