import Title from '../Title/Title';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
  return (
    <div className="appointment__container b-light p-3 ">
      <Title title="Make an Appointment" desc="tempore nihil nam tenetur accusantium et tempora sunt et " />
      <div>
        <Form className='d-flex flex-column justify-content-center flex-wrap'>
          <Row className='d-flex flex-wrap'>
            <Col className='col-1'></Col>
            <Col xs={12} md={3} className='mb-3'>
              <Form.Control placeholder="Your Name" />
            </Col>
            <Col xs={12} md={4} className='mb-3'>
              <Form.Control placeholder="Your Email" />
            </Col>
            <Col xs={12} md={3} className='mb-3'>
            <Col className='col-1'></Col>
              <Form.Control placeholder="Your Phone" />
            </Col>
          </Row>
          <Row className='mt-4 d-flex flex-wrap'>
          <Col className='col-1'></Col>
            <Col xs={12} md={3} className='mb-3'>
            <Form.Control type="date" placeholder="Select Date" />
            </Col>
            <Col xs={12} md={4} className='mb-3'>
              <Form.Select aria-label="Default select example">
                <option>Select Department</option>
                <option value="1">Heart</option>
                <option value="2">Eye</option>
                <option value="3">Lab</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={3} className='mb-3'>
              <Form.Select aria-label="Default select example">
                <option>Select Doctor</option>
                <option value="1">Dr.Sarah</option>
                <option value="2">Dr.Amanda</option>
                <option value="3">Dr.William</option>
              </Form.Select>
            </Col>
            <Col className='col-1'></Col>
          </Row>
          <Row className='mt-4'>
            <Col className='col-1'></Col>
            <Col xs={10}>
              <Form.Control placeholder="Message (Optional)" className='message__field' />
            </Col>
            <Col className='col-1'></Col>
          </Row>
          <Row className='mt-4'>
            <Col xs={12} md={5}></Col>
            <Col xs={12} md={5}>
              <Button variant="primary" className='btn'>Make an Appointment</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;