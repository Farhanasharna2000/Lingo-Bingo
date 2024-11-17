import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayOut = () => {
    return (
        <div className="font-poppins ">
          <Navbar/>
          <div className="container mx-auto">
          <Outlet/>
          </div>
          <Footer/>  
        </div>
    );
};

export default MainLayOut;