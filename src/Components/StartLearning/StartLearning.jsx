import { Helmet } from "react-helmet";
import Learn from "../Learn/Learn";

const StartLearning = () => {
    return (
        <div>
            <Helmet>
                <title>StartLearning | Lingo Bingo</title>
            </Helmet>
            <Learn />
        </div>
    );
};

export default StartLearning;