import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import mobileImg1 from '../../assets/app-1.png'
import mobileImg2 from '../../assets/app-2.png'
import bgImg from '../../assets/background-pattern.png'

const Application = () => {

    return (

        <div className=" bg-blue-100 shadow-md rounded-lg lg:flex gap-10 mb-16 py-5 relative  justify-center items-center"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

            <div className="lg:w-[60%] pl-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
                    Download <span className="text-orange-500">Mobile Application</span>
                </h2>
                <p className="text-gray-600 mb-6">
                    Install the Lingo Bingo application on your mobile and learn the Turkish language.......
                </p>
                <Link
                    to="#"
                    className="btn btn-outline btn-primary  space-x-2 w-56"
                >
                    <FaDownload className="text-lg" />
                    Download Application
                </Link>
            </div>

            <div className="mt-10 flex justify-center lg:w-[40%]">
                <img
                    src={mobileImg2}
                    alt="App Preview"
                    className="w-80 h-auto animate__animated animate__zoomIn  animate__delay-1s"
                />
                <img
                    src={mobileImg1}
                    alt="App Preview"
                    className="lg:w-[20%] w-auto h-[60%] lg:h-[90%]  animate__animated animate__zoomIn animate__delay-2s absolute lg:top-3 lg:right-7 right-10"
                />
            </div>

        </div>
    );
};

export default Application;