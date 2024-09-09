import { Navbar , Container} from 'react-bootstrap'
import { FaRegClock } from "react-icons/fa";
import './InfoBar.css'
import { AiOutlineMobile } from "react-icons/ai";

const InfoBar = () => {
  return (
    <>
    <Navbar className="info">
  <Container className='d-flex justify-content-between align-items-center'>
    <Navbar.Brand className='t-white fs-6 d-flex align-items-center gap-2 d-none d-md-flex'>
      <FaRegClock /> Monday - Saturday, 8AM to 10PM
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='t-white d-flex justify-content-center w-100 d-md-none'>
        <AiOutlineMobile /> Call us now +1 5589 55488 55
      </Navbar.Text>
      <Navbar.Text className='t-white d-none d-md-block align-content-center'>
        <AiOutlineMobile /> Call us now +1 5589 55488 55
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default InfoBar