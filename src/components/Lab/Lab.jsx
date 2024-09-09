import Features from '../Features/Features';
import './Lab.css'
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";
import { FaStaffSnake } from "react-icons/fa6";

const Lab = () => {

  const features = [
    {
      icon : <FaHandHoldingMedical /> ,
      title : 'Lorem Ipsum',
      text : 'Orci eu fames tempor habitant auctor aliquet.'
    },
    {
      icon : <FaSuitcaseMedical /> ,
      title : 'Lorem Ipsum',
      text : 'Orci eu fames tempor habitant auctor aliquet.'
    },
    {
      icon : <FaStaffSnake /> ,
      title : 'Lorem Ipsum',
      text : 'Orci eu fames tempor habitant auctor aliquet.'
    },
    {
      icon : <FaLungs /> ,
      title : 'Lorem Ipsum',
      text : 'Orci eu fames tempor habitant auctor aliquet.'
    }
  ]

  return (
    <>
    <div className="lab__container ">
    <div className="card mb-3 border-0" >
        <div className="row g-0">
            <div className="col-md-6">
                <img src="/images/features.jpg" className="img-fluid rounded-start lab__img" alt="features" />
            </div>
         <div className="col-md-6">
            <div className="card-body ms-3 pt-0">
            <h5 className="card-title fs-2 t-black ">Massa amet hendrerit mauris libero</h5>
            <div className='title__border '></div>
            <p className="card-text mt-3 fst-italic t-black">pretium per dapibus risus. Aenean magna blandit aliquet tincidunt condimentum penatibus consequat. Egestas tellus porta felis et fusce bibendum lacinia sit dictumst.  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Features features={features}/>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Lab