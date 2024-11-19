import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Tutorials = () => {
    return (
        <div className="my-8">
            <Helmet>
                <title>Tutorials | Lingo Bingo</title>
            </Helmet>
            <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4 text-center">Alphabet Learning Tutorials</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/kfBeoWLCosA?si=51SIad09yjBwOogT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/Doy8-hyZtWg?si=z5PXV3aFeAtjSL-q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/QeT58HmzRAg?si=jCEQkJc-R2NnhvnG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/T1zzDUPMQlg?si=8PMBWNO0RBz0mdyP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div><iframe width="400" height="315" src="https://www.youtube.com/embed/b7HrDO0PnjA?si=DOAUH1vJuFpOkdVp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/AIQds04GkO0?si=aW2YBOqXN3aE16Gu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/o2eCk_v4CJU?si=_xSxXTepHVLU7y1R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/uv_q-3y97Wo?si=2QL9uScLhLCiR2kz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nt4J_CX5AT0?si=E_riSC8Ukqq-8j8Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link to='/start-learning'
                    className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Learn Vocabularies
                </Link>
            </div>
        </div>

    );
};

export default Tutorials;