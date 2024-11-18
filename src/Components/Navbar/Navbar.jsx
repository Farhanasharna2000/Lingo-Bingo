import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { handleLogout, user } = useContext(authContext);
  console.log(user);

  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold  ${isActive ? "bg-black text-white hover:text-black" : "hover:text-yellow-600"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-black text-white hover:text-black" : "hover:text-yellow-600"}`
          }
          to="/start-learning"
        >
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-black text-white hover:text-black" : "hover:text-yellow-600"}`
          }
          to="/tutorials"
        >
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-black text-white hover:text-black" : "hover:text-yellow-600"}`
          }
          to="/about-us"
        >
          About us
        </NavLink>
      </li>
      {
        user && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "bg-black text-white hover:text-black" : "hover:text-yellow-600"}`
              }
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
        )
      }
    </>
  );

  return (
    <>
      {user?.displayName && location.pathname === "/" && (
        <div className="py-2 text-center text-blue-500 text-lg font-semibold">
          Welcome, {user.displayName}!
        </div>
      )}

      <div className="bg-base-100 shadow-md py-2">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn bg-white text-2xl font-bold">Lingo Bingo</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="flex gap-3">
                <img
                  className="rounded-full w-12 h-12"
                  src={user?.photoURL || ""}
                  alt="User"
                />
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <button className="btn btn-primary">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
