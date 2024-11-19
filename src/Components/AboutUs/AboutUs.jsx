import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
            <title>AboutUs | Lingo Bingo</title>
           </Helmet>
            <Navbar />
            <div className='container mx-auto py-5'>
                AboutUs

            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;