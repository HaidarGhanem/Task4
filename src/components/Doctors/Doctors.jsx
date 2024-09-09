import Title from '../Title/Title'
import {Card} from 'react-bootstrap'
import './Doctors.css'

const Doctors = ({doctors}) => {
  return (
    <div className='b-light p-3'>
        <Title title="Doctors" desc="Accumsan lacus natoque at lectus leo inceptos" />
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            {
                doctors.map((element , index)=>{
                    return (
                        <Card style={{ width: '18rem' }} className='border-0 shadow-lg' key={index}>
                            <Card.Img variant="top" src={element.img} />
                            <Card.Body>
                                <h5>{element.name}</h5>
                                <p>{element.role}</p>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Doctors