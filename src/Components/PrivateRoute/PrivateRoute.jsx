import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (!user) {
        return <Navigate state={{ from: location }} replace to="/login"></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {

    children: PropTypes.array,
}
export default PrivateRoute;