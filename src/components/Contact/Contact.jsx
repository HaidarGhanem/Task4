import './Contact.css'
import Title from '../Title/Title'
import {Card , Row , Col , Form , Button} from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Contact = ({contact}) => {
  return (
    <div className="contact__container">
        <Title title="Contact" desc="integer quisque ligula habitasse massa" /> 
        <Card >
        <iframe className='location' src={contact.map}></iframe>           
        </Card>

        <div className="contact__details d-flex justify-content-around flex-wrap gap-2 align-items-center mt-5">
            <div>
                <Row>
                    <Col className='col-12'>
                        <Card className='d-flex p-4 justify-content-center align-items-center location__box border-0 shadow'>
                        <div className='icon__border d-flex justify-content-center align-items-center'> <CiLocationOn className='fs-1 t-cyan '/> </div>
                        <p className='t-black mt-3'>{contact.address}</p>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col className='col-6'>
                        <Card className='d-flex p-4 justify-content-center align-items-center details__box border-0 shadow'>
                            <div className='icon__border d-flex justify-content-center align-items-center'> <FiPhone className='fs-1 t-cyan tw-light'/> </div>
                            <p className='t-black mt-3'>{contact.phone}</p>  
                        </Card>
                    </Col>
                    
                    <Col className='col-6'>
                        <Card className='d-flex p-4 justify-content-center align-items-center details__box border-0 shadow'>
                            <div className='icon__border d-flex justify-content-center align-items-center'> <TfiEmail className='fs-1 t-cyan tw-light'/> </div>
                            <p className='t-black mt-3'>{contact.email}</p>  
                        </Card>
                    </Col>
                </Row>
            </div>

            <div>
            <Card className='d-flex p-4 justify-content-center align-items-center inputs__box border-0 shadow'>
                <Row className='mb-3'>
                    <Col md={1}></Col>
                    <Col xs={12} md={5}>
                        <Form.Control placeholder="Your Name" />
                    </Col>
                    <Col xs={12} md={5}>
                        <Form.Control placeholder="Your Email" />
                    </Col>
                    <Col md={1}></Col>
                </Row>

                <Row className='mb-3'>
                    <Col md={1}></Col>
                    <Col xs={12} md={10}>
                        <Form.Control placeholder="Subject" className='subject__box' />
                    </Col>
                    <Col md={1}></Col>
                </Row>

                <Row className='mb-3'>
                    <Col md={1}></Col>
                    <Col xs={12} md={10}>
                        <Form.Control placeholder="Message" className='message__box' as="textarea" rows={5} />
                    </Col>
                    <Col md={1}></Col>
                </Row>

                <Button variant="primary" className='btn'>Send a Message</Button>
            </Card>
        </div>
        </div>
    </div>
  )
}

export default Contact