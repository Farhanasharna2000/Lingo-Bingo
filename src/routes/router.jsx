import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import StartLearning from "../Components/StartLearning/StartLearning";
import Tutorials from "../Components/Tutorials/Tutorials";
import About from "../Components/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Components/Error/Error";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AboutUs from "../Components/AboutUs/AboutUs";
import MyProfile from "../Components/MyProfile/MyProfile";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import Lesson from "../Components/Lesson/Lesson";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/start-learning",
        element: <PrivateRoute>
          <StartLearning />
        </PrivateRoute>,
        loader: () => fetch('/turkish.json'),
      },
      {
        path: "/lesson/:lessonNo",
        element:
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
        ,
        loader: () => fetch('/turkish.json'),
      },
      {
        path: "/tutorials",
        element: <PrivateRoute>
          <Tutorials />
        </PrivateRoute>,

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
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/profile",
    element: <PrivateRoute>
      <MyProfile />
    </PrivateRoute>,
  },
  {
    path: "/update-profile",
    element: <PrivateRoute>
      <UpdateProfile />
    </PrivateRoute>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default router;