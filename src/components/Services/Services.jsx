import './Services.css'
import {Card} from 'react-bootstrap'

const Services = ({services}) => {
  return (
    <>
    <div className="services__container">
        
        {
        services.map((element , index) => {
            return (
                <Card className='services__card border-0 shadow p-2 mb-2 bg-white' key={index}>
                    <Card.Body className='d-flex flex-column align-content-center justify-content-center gap-3'>
                    <Card.Title className='fs-1 p-1 t-cyan'>{element.icon}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-5 ">{element.title}</Card.Subtitle>
                    <Card.Text className='fs-6 fw-light'>
                        {element.content}
                    </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
        }

    </div>
    </>
  )
}

export default Services