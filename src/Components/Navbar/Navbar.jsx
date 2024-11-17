import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
       
        <h1 className="text-2xl font-bold">Lingo Bingo</h1>

        <nav className="flex space-x-4">
          <Link to="/" className="btn btn-ghost">Home</Link>
          <Link to="/start-learning" className="btn btn-ghost">Start Learning</Link>
          <Link to="/tutorials" className="btn btn-ghost">Tutorials</Link>
          <Link to="/about" className="btn btn-ghost">About Us</Link>
        </nav>

        <div>
       
            <Link to="/login" className="btn btn-primary">Login</Link>
          
        </div>
      </div>
    </div>
    );
};

export default Navbar;