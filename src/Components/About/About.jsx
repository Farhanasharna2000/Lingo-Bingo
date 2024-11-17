import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gray-100 py-16 px-8 my-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <span className="font-bold text-blue-600">Lingo Bingo</span>! 
          Our mission is to make learning new vocabulary fun, engaging, and accessible for everyone. 
          Whether you are preparing for exams, improving your communication skills, or exploring a new language, 
          we’re here to help you every step of the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="card bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our goal is to help users overcome the challenges of retaining vocabulary by offering a platform 
              that combines structured lessons with interactive examples. With a wide range of languages and 
              difficulty levels, we aim to make language learning accessible and enjoyable.
            </p>
          </div>
          <div className="card bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
            <p className="text-gray-600">
              Learn vocabulary with carefully curated lessons, real-life examples, and pronunciation guides. 
              Start by selecting a language, explore lessons by difficulty, and test your skills through quizzes. 
              You’ll build your vocabulary effectively with consistent practice.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link to="/start-learning" className="btn btn-primary">
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
    );
};

export default About;