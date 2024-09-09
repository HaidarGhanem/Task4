import './Footer.css'
import {  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Card } from 'react-bootstrap'

const Footer = ({ contact }) => {
  return (
    <div className='footer__container  b-light d-flex flex-column gap-5 p-4'>
      <div className='footer__content-wrapper d-flex flex-wrap justify-content-between'>
        <div className='footer__info d-flex flex-column'>
          <Card className='border-0 b-light '>
            <Card.Body className='d-flex flex-column gap-2'>
              <Card.Title ><h2 className='fw-bold t-black'>Medicio</h2></Card.Title>
              <Card.Text className='footer__content t-black'>
                {contact.address}
              </Card.Text>
              <Card.Text>
                <p className='fw-bold t-black'>Phone: <span className='fw-normal'>{contact.phone}</span></p>
                <p className='fw-bold t-black'>Email: <span className='fw-normal'>{contact.email}</span></p>
              </Card.Text>
              <Card.Text>
                <div className='d-flex gap-2 ficons'>
                  <div className='footer__icon t-black'><FaXTwitter /></div>
                  <div className='footer__icon t-black'><FaFacebook /></div>
                  <div className='footer__icon t-black'><FaInstagram /></div>
                  <div className='footer__icon t-black'><FaLinkedin /></div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='footer__links d-flex gap-5 flex-wrap'>
          <Card className='border-0 b-light'>
            <Card.Body className='d-flex flex-column gap-2'>
              <Card.Title><h6 className='fw-bold t-black'>Useful Links</h6></Card.Title>
              <Card.Text className='d-flex flex-column gap-2 fw-light t-black'>
                <p>Home</p>
                <p>About us</p>
                <p>Services</p>
                <p>Terms of services</p>
                <p>Privacy Policy</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 b-light'>
            <Card.Body className='d-flex flex-column gap-2'>
              <Card.Title><h6 className='fw-bold t-black'>Our Services</h6></Card.Title>
              <Card.Text className='d-flex flex-column gap-2 fw-light t-black'>
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Product Management</p>
                <p>Marketing</p>
                <p>Graphic Design</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 b-light'>
            <Card.Body className='d-flex flex-column gap-2'>
              <Card.Title><h6 className='fw-bold t-black'>Hic solutasetp</h6></Card.Title>
              <Card.Text className='d-flex flex-column gap-2 fw-light t-black'>
                <p>consectetuer</p>
                <p>adipiscing</p>
                <p>cubilia</p>
                <p>curabitur</p>
                <p>ultricies</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 b-light'>
            <Card.Body className='d-flex flex-column gap-2'>
              <Card.Title><h6 className='fw-bold t-black'>Imperdiet molestie</h6></Card.Title>
              <Card.Text className='d-flex flex-column gap-2 fw-light t-black'>
                <p>dictum</p>
                <p>ullamcorper</p>
                <p>consectetur</p>
                <p>penatibus</p>
                <p>rhoncus</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='footer__end d-flex flex-column justify-content-center align-items-center'>
        <div className='w-100 footer__end-border' />
        <p className='t-black'>@ Copyright <span className='fw-bold t-black'>Medicio</span> All Rights Reserved</p>
        <p className='fw-light fs-6 t-black'>Designed by HaidarGhanem</p>
      </div>
    </div>
  )
}

export default Footer;