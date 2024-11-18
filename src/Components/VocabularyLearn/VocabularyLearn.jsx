import { Link } from "react-router-dom";
import cardImg from '../../assets/idioms.png'
const VocabularyLearn = () => {
    return (
        <div className="lg:flex justify-center items-center bg-blue-100 mb-10 rounded-lg">
            <div className="p-8 space-y-4">
                <h1 className="text-2xl font-bold">Learn <span className="text-blue-700">Turkish vocabulary</span> from anywhere</h1>
                <p className="lg:w-5/6">Lingo Bingo is a vocabulary Turkish learning platform that makes your learning process faster and easier.</p>

                <Link to="/start-learning" className="btn btn-primary">
                    Start Learning Now
                </Link>

            </div>
            <div>
                <img className="h-80 p-5" src={cardImg} alt="" />
            </div>
        </div>
    );
};

export default VocabularyLearn;