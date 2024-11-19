import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";
const MainLayOut = () => {
  return (
    
    <div className="font-poppins ">
      <Helmet>
            <title>Lingo Bingo</title>
           </Helmet>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />

      </div>

      <Footer />
    </div>
  );
};

export default MainLayOut;