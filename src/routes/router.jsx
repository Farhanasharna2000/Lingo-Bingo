import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import StartLearning from "../Components/StartLearning/StartLearning";
import Tutorials from "../Components/Tutorials/Tutorials";
import About from "../Components/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Components/Error/Error";


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
    {
        path: "/login",
        element: <Login />,
    },
    {
      path: "/pages/login",
      element: <Login />,
  },
    {
      path: "/pages/register",
      element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
},
  ]);

  export default router;