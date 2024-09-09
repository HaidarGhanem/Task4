import './HeroCard.css'
import { Button , Card } from 'react-bootstrap'

const HeroCard = ({title , content , btn}) => {
  return (
    <div className="card__container">
        <Card className="text-center bg-white bg-opacity-75">
      <Card.Body >
        <Card.Title className='t-black fs-3'>{title}</Card.Title>
        <Card.Text className='t-black fs-6'>
            {content}
         </Card.Text>
        <Button variant="primary" className='btn'>{btn}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default HeroCard