import './NavBar.css'
import {Navbar , Container, Nav , Button} from 'react-bootstrap'

const NavBar = ({logo , items , text}) => {

  return (
    <>
      <Navbar expand="lg" className="bg-white">
      <Container fluid className='justify-content-evenly mt-2'>
        <Navbar.Brand href="#" ><img  className='logo' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Button variant="primary" className='btn d-flex d-md-none'>{text}</Button>
        <Navbar.Collapse id="navbarScroll" className='flex-grow-0 gap-3'>
          <Nav
            className="me-auto my-2 my-lg-0 gap-1"
            navbarScroll
          >
            {items?.map((elemnt, index)=>{
              return (
                <Nav.Link className="links fw-medium t-black " key={index} href={`#${elemnt?.id}`}>{elemnt?.text}</Nav.Link>
              )
            })}
          </Nav>
          
          <Button variant="primary" className='btn d-none d-md-flex'>{text}</Button>
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar