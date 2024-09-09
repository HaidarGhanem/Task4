import './Help.css'
import {Button , Card} from 'react-bootstrap'

const Help = () => {
  return (
    <Card className="text-center t-white help-card mt-5">
      <Card.Body className='mt-5' >
        <Card.Title className='fs-2 help-card-content'>In an emergency? Need help now?</Card.Title>
        <Card.Text>
          WDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Card.Text>
        <Button className='btn_light'>Make an Appointment</Button>
      </Card.Body>
    </Card>
  )
}

export default Help