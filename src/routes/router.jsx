import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import StartLearning from "../Components/StartLearning/StartLearning";
import Tutorials from "../Components/Tutorials/Tutorials";
import About from "../Components/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
        {
            path: "/",
      element: <Home/>,   
        },
        {
            path: "/start-learning",
            element: <StartLearning />,
        },
        {
            path: "/tutorials",
            element: <Tutorials />,
        },
        {
            path: "/about",
            element: <About />,
        },
      ]
    },
  ]);

  export default router;