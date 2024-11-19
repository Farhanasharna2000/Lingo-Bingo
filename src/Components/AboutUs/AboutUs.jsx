import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>About Me | Farhana Sharna</title>
            </Helmet>
            <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
                <div className="container mx-auto py-12 px-6">
                    <h1 className="text-5xl font-bold text-center text-blue-800 mb-8">
                        About Me
                    </h1>
                    <div className="card bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-xl">
                                Hello, I am <span className="font-bold text-blue-800">Farhana Sharna</span>. I work in web development and specialize in building user-friendly interfaces using modern tools and technologies.
                            </p>
                            <p className="text-lg mt-6">
                                Here are some of my recent projects:
                            </p>
                            <ul className="grid grid-cols-2 gap-4 mt-4 text-left">
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Dragon News</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Gadget Heaven</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Boi Poka</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">My Coffee Shop</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">BPL-DREAM 11</li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-3xl font-bold text-blue-800 text-center">My Skills</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React</h3>
                                    <p className="text-sm text-gray-600">For building user interfaces.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React Router</h3>
                                    <p className="text-sm text-gray-600">For managing application routing.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">Firebase</h3>
                                    <p className="text-sm text-gray-600">Backend services and hosting.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React Helmet</h3>
                                    <p className="text-sm text-gray-600">Dynamic document head management.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React CountUp</h3>
                                    <p className="text-sm text-gray-600">Animating numbers with a counting-up effect.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React Hot Toast</h3>
                                    <p className="text-sm text-gray-600">Customizable toast notifications.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">React Icons</h3>
                                    <p className="text-sm text-gray-600">Popular icon sets for React.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">AOS</h3>
                                    <p className="text-sm text-gray-600">Scroll-triggered animations.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">DaisyUI</h3>
                                    <p className="text-sm text-gray-600"> Offering pre-designed, customizable components for quick UI development.</p>
                                </div>
                                <div className="skill-card p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md text-center">
                                    <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                                    <p className="text-sm text-gray-600">Enables rapid, custom design directly in markup.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
