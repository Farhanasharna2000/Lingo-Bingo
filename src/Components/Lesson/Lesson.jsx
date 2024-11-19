import  { useState } from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";

const Lesson = () => {
  const { lessonNo } = useParams();
  const data = useLoaderData();

  const [modalData, setModalData] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const filteredData = data.filter((item) => item.Lesson_no === parseInt(lessonNo));

  const getCardColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-200"; 
      case "medium":
        return "bg-yellow-200"; 
      case "hard":
        return "bg-red-200"; 
      default:
        return "bg-gray-200"; 
    }
  };

  const handleOpenModal = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "tr-TR";
    window.speechSynthesis.speak(utterance);
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {filteredData[0]?.title || `Lesson ${lessonNo}`}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredData.map((item, index) => (
          <div
          onClick={() => pronounceWord(item.word)}
            key={index}
            className={`card shadow-lg p-4 cursor-pointer transition duration-300 ${getCardColor(
              item.difficulty
            )}`}
          >
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p>
              <strong>Word:</strong> {item.word}
            </p>
            <p>
              <strong>Meaning:</strong> {item.meaning}
            </p>
            <p>
              <strong>Pronunciation:</strong> {item.pronunciation}
            </p>
            <p>
              <strong>Part of Speech:</strong> {item.part_of_speech}
            </p>
            <button
              className="btn btn-sm btn-primary mt-4"
              onClick={() => handleOpenModal(item)}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/start-learning" className="btn btn-secondary">
          Back to Lesson
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">{modalData.word}</h2>
            <p>
              <strong>Meaning:</strong> {modalData.meaning}
            </p>
            <p>
              <strong>When to Say:</strong> {modalData.when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {modalData.example}
            </p>
            <button
              className="btn btn-primary mt-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
