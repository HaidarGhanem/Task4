import Title from '../Title/Title'
import './ServicesDetails.css'

const ServicesDetails = ({details}) => {
  return (
    <>
        <div className='serv__details__container'>
            <Title title="Services" desc=" reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" />
            <div className='d-flex justify-content-center align-items-center mt-5 gap-5 flex-wrap' >
            {
                details.map((element , index)=>{
                    return (
                        
                            <div className="card text-center mb-3 border-0 m-3 " style={{width: "18rem"}} key={index}>
                                    <div className="card-body d-flex flex-column align-items-center gap-3 b-white">
                                    <div className="card-title card__icon t-cyan rounded-circle shadow d-flex justify-content-center align-items-center"><h1>{element.icon}</h1></div>
                                    <h5 className="card-text t-black fw-bold">{element.title}</h5>
                                    <div className='title__border '></div>
                                    <p className="t-blac fw-light">{element.text}</p>
                                </div>
                            </div>
                        
                    )
                })
            }
            </div>


        </div>
    </>
  )
}

export default ServicesDetails