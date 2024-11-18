import About from "../About/About";
import Application from "../Application/Application";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";
import VocabularyLearn from "../VocabularyLearn/VocabularyLearn";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Success/>
            <Application/>
            <VocabularyLearn/>
        </div>
    );
};

export default Home;