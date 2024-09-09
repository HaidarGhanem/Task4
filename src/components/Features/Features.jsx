import { Card } from 'react-bootstrap';
import './Feature.css';

const Features = ({ features }) => {
  return (
    <div className="mt-5 d-flex flex-column align-items-start gap-4">
      {features.map((element, index) => (
        <div className="d-flex  mb-5" key={index}>
          <Card style={{ width: '4rem', height: '4rem' }} className='border-1 d-flex justify-content-center border-0 shadow'>
            <Card.Body>
              <Card.Title className='t-cyan '>
                <h1 className='d-flex align-items-center justify-content-center'>{element.icon}</h1>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="t-black ms-4"> 
            <h5>{element.title}</h5>
            <p>{element.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;