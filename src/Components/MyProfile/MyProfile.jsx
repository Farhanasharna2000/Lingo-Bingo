import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6 my-8 max-w-lg">
                <div className="card shadow-xl bg-slate-100">
                    <div className="card-body items-center text-center">
                        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.displayName || 'User'}!</h1>
                        <img
                            src={user?.photoURL || ''}
                            alt="User Profile"
                            className="rounded-full w-32 h-32 mb-4"
                        />
                        <p className="text-gray-500"><span className="font-bold">Name:</span> {user?.displayName}</p>

                        <p className="text-gray-500"><span className="font-bold">Email:</span> {user?.email}</p>
                        <button
                            className="btn btn-primary mt-4 flex items-center"
                            onClick={() => navigate('/update-profile')}
                        >
                            <FaUserEdit className="mr-2" />
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MyProfile;