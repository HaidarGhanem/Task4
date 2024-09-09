import Title from '../Title/Title';
import './Pricing.css'
import { Row } from 'react-bootstrap';

const Pricing = () => {
  return (
    <>
    <Title title="Pricing" desc="Habitant ridiculus mattis arcu, consectetur" />
    <div className='d-flex justify-content-center flex-wrap gap-4'>
        <div className="" style={{width: '18rem'}} >
            <h5 className='price__type d-flex justify-content-center align-items-center t-black'>Free</h5>
            <div className="price__content t-black d-flex flex-column gap-4">
                <div className='d-flex justify-content-center align-items-baseline'>
                    <h2>$0</h2>
                    <p className='fw-light fs-6 '>/ month</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className='fs-6'>Aida dere</p>
                    <p className='fs-6'>Nec feugiat nisl</p>
                    <p className='fs-6'>Nulla at volutpat dola</p>
                    <del className='fs-6'>vivamus vulputate</del>
                    <del className='fs-6'>congue etiam hendrerit</del>
                </div>
            </div>
            <div className="price_btn d-flex justify-content-center align-items-center">
                    <button className='btn t-white'>Buy Now</button>
            </div>
            
        </div>
        
        <div className="" style={{width: '18rem'}} >
            <h5 className='price__type d-flex justify-content-center align-items-center t-white' style={{backgroundColor: 'var(--Primary-Color)'}} >Business</h5>
            <div className="price__content t-black d-flex flex-column gap-4">
                <div className='d-flex justify-content-center align-items-baseline'>
                    <h2>$19</h2>
                    <p className='fw-light fs-6 '>/ month</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className='fs-6'>Aida dere</p>
                    <p className='fs-6'>Nec feugiat nisl</p>
                    <p className='fs-6'>Nulla at volutpat dola</p>
                    <p className='fs-6'>vivamus vulputate</p>
                    <del className='fs-6'>congue etiam hendrerit</del>
                </div>
            </div>
            <div className="price_btn d-flex justify-content-center align-items-center">
                    <button className='btn t-white'>Buy Now</button>
            </div>
            
        </div>

        <div className="" style={{width: '18rem'}} >
            <h5 className='price__type d-flex justify-content-center align-items-center t-black'>Developer</h5>
            <div className="price__content t-black d-flex flex-column gap-4">
                <div className='d-flex justify-content-center align-items-baseline'>
                    
                    <h2>$29</h2>
                    <p className='fw-light fs-6 '>/ month</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className='fs-6'>Aida dere</p>
                    <p className='fs-6'>Nec feugiat nisl</p>
                    <p className='fs-6'>Nulla at volutpat dola</p>
                    <pattern className='fs-6'>vivamus vulputate</pattern>
                    <pattern className='fs-6'>congue etiam hendrerit</pattern>
                </div>
            </div>
            <div className="price_btn d-flex justify-content-center align-items-center">
                    <button className='btn t-white'>Buy Now</button>
            </div>
            
        </div>

        <div className="" style={{width: '18rem'}} >
            <h5 className='price__type d-flex justify-content-center align-items-center t-black'>Ultimate</h5>
            <div className="price__content t-black d-flex flex-column gap-4">
                <div className='d-flex justify-content-center align-items-baseline'>
                    <h2>$49</h2>
                    <p className='fw-light fs-6 '>/ month</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className='fs-6'>Aida dere</p>
                    <p className='fs-6'>Nec feugiat nisl</p>
                    <p className='fs-6'>Nulla at volutpat dola</p>
                    <p className='fs-6'>vivamus vulputate</p>
                    <p className='fs-6'>congue etiam hendrerit</p>
                </div>
            </div>
            <div className="price_btn d-flex justify-content-center align-items-center">
                    <button className='btn t-white'>Buy Now</button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Pricing