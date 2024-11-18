// UpdateProfile.jsx
import  { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const UpdateProfile = () => {
  const { user, manageProfile } = useContext(authContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await manageProfile(name, photoURL);
      alert('Profile updated successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <>
    <Navbar/>
     <div className="container mx-auto p-6 max-w-md">
      <div className="card shadow-xl bg-base-100">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <button  type="submit" className="btn btn-primary w-full">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default UpdateProfile;
