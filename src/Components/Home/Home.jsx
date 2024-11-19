import { useContext } from "react";
import About from "../About/About";
import Application from "../Application/Application";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";
import VocabularyLearn from "../VocabularyLearn/VocabularyLearn";
import { authContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(authContext);
  return (
    <div className="mt-3">
      {user?.displayName && location.pathname === "/" && (
        <div className="py-2 text-center text-blue-500 text-lg font-semibold">
          Welcome, {user.displayName}!
        </div>
      )}

      <Banner />
      <About />
      <Success />
      <Application />
      <VocabularyLearn />
    </div>
  );
};

export default Home;