import Title from '../Title/Title'
import { FaPlayCircle } from "react-icons/fa";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <Title title="About Us" desc="WDuis aute irure dolor in reprehenderit in voluptate velit" />
    <div className="about__container">
    <div className="card mb-3 border-0" >
        <div className="row g-0">
            <div className="col-md-6 position-relative video">
                <img src="/images/about.jpg" className="img-fluid rounded-start " alt="about" />
                <FaPlayCircle className="t-cyan fs-1  position-absolute top-50 start-50 translate-middle " />
            </div>
         <div className="col-md-6">
            <div className="card-body ms-3 pt-0">
            <h5 className="card-title fs-2 t-black ">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            <p className="card-text mt-2 fst-italic t-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text t-black"><img src="/images/seen.png" alt="seen" className='seen'/> Hendrerit euismod condimentum feugiat purus senectus.</p>
            <p className="card-text t-black"><img src="/images/seen.png" alt="seen" className='seen'/> Nullam molestie porta dapibus justo ultricies.</p>
            <p className="card-text t-black"><img src="/images/seen.png" alt="seen" className='seen'/>  Sociosqu ipsum amet et blandit cras neque per non proin.</p>
            <p className="card-text mt-2  t-black">Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent nam sapien suspendisse magna amet; metus class magnis volutpat. Habitant tortor justo fermentum egestas et laoreet et ornare. Elementum venenatis urna arcu nostra, consectetur ullamcorper enim eget. Eget nascetur risus tempor nisi nisi.</p>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs