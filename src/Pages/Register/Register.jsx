import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault();}
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
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
               
                <div className="form-control mt-6">
                    <button className="btn rounded-none btn-neutral">Register</button>
                </div>

                <p className="text-center font-semibold">Already Have An Account ? <Link to='/pages/login' className="text-[#F75B5F]" >Login</Link></p>
            </form>
        </div>

    </div>
    );
};

export default Register;