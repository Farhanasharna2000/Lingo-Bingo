import { Link } from "react-router-dom";

const Tutorials = () => {
    return (
        <div className="my-8">
           <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Alphabet Learning Tutorials</h2>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/kfBeoWLCosA?si=51SIad09yjBwOogT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/Doy8-hyZtWg?si=z5PXV3aFeAtjSL-q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/l0uvd95mVqs?si=IBqK1EqDLm1If9yz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/QeT58HmzRAg?si=jCEQkJc-R2NnhvnG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/T1zzDUPMQlg?si=8PMBWNO0RBz0mdyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div><iframe width="400" height="315" src="https://www.youtube.com/embed/b7HrDO0PnjA?si=DOAUH1vJuFpOkdVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/AIQds04GkO0?si=aW2YBOqXN3aE16Gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/o2eCk_v4CJU?si=_xSxXTepHVLU7y1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>
<iframe width="400" height="315" src="https://www.youtube.com/embed/uv_q-3y97Wo?si=2QL9uScLhLCiR2kz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
      
      <div className="flex justify-center mt-8">
        <Link to='/start-learning'
          className="btn btn-primary">
          Learn Vocabularies
        </Link>
      </div>
    </div>
        
    );
};

export default Tutorials;