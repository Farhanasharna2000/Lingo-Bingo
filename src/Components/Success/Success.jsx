import CountUp from 'react-countup';
const Success = () => {
  const userCount = 1200;
  const lessonCount = 10;
  const vocabularyCount = 50;
  const tutorialCount = 10;
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      <div className="card shadow-xl bg-blue-100 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">User Count</h2>
        <CountUp end={userCount} duration={5} delay={1} className="text-4xl font-bold text-primary" />
      </div>

      <div className="card shadow-xl bg-blue-100 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Lesson Count</h2>
        <CountUp end={lessonCount} duration={5} delay={1} className="text-4xl font-bold text-secondary" />
      </div>

      <div className="card shadow-xl bg-blue-100 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Vocabulary Count</h2>
        <CountUp end={vocabularyCount} duration={5} delay={1} className="text-4xl font-bold text-accent" />
      </div>

      <div className="card shadow-xl bg-blue-100 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Tutorial Count</h2>
        <CountUp end={tutorialCount} duration={5} delay={1} className="text-4xl font-bold text-warning" />
      </div>
    </div>
  );
};

export default Success;