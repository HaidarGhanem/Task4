
import InfoBar from './components/InfoBar/InfoBar'
import NavBar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Help from './components/Help/Help'
import Lab from './components/Lab/Lab'
import ServicesDetails from './components/ServicesDetails/ServicesDetails'
import AboutUs from './components/AboutUs/AboutUs'
import Numbers from './components/Numbers/Numbers'
import Appointment from './components/Appointment/Appointment'
import Department from './components/Departments/Department'
import Testimonials from './components/Testimonials/Testimonials'
import Doctors from './components/Doctors/Doctors'
import Gallery from './components/Gallery/Gallery'
import { FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { PiNeedleFill } from "react-icons/pi";
import { FaDna } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FaAward } from "react-icons/fa";
import { BsFillFileMedicalFill } from "react-icons/bs";
import { FaWheelchair } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import Pricing from './components/Pricing/Pricing'
import Questions from './components/Questions/Questions'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {

  const logo = './images/logo.png'
  const items = [
    { text : 'HOME' , id : 'Home' },
    { text : 'ABOUT' , id : 'ABOUT' },
    { text : 'SERVICES' , id : 'SERVICES' },
    { text : 'DEPARTMENTS' , id : 'DEPARTMENTS' },
    { text : 'DOCTORS' , id : 'DOCTORS' },
    { text : 'DROPDOWN' , id : 'DROPDOWN' },
    { text : 'CONTACT' , id : 'CONTACT' },
  ]
  const btn = 'Make an Appointment'
  const hero = [
    {
    path : './images/hero-carousel/hero-carousel-1.jpg',
    alt : 'hero-carousel',
    title :'First Carousel',
    content : 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    btn : 'Read More'
    },
    {
    path : './images/hero-carousel/hero-carousel-2.jpg',
    alt : 'hero-carousel',
    title :'Second Carousel',
    content : 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    btn : 'Read More'
    },
    {
    path : './images/hero-carousel/hero-carousel-3.jpg',
    alt : 'hero-carousel',
    title :'Third Carousel',
    content : 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    btn : 'Read More'
    }
  ]
  const services = [
    {
    icon : <FaHeartbeat />,
    title : 'Cardiology',
    content : 'Some quick example text to build on the card title and make up'
    },
    {
    icon : <GiMedicines />,
    title : 'Medicine',
    content : 'Some quick example text to build on the card title and make up'
    },
    {
    icon : <PiNeedleFill />,
    title : 'Tools',
    content : 'Some quick example text to build on the card title and make up'
    },
    {
    icon : <FaDna />,
    title : 'DNA tests',
    content : 'Some quick example text to build on the card title and make up'
    }
  ]
  const numbers = [
    {
      icon : <FaUserDoctor /> ,
      num : 25 ,
      text : 'Doctors'
    },
    {
      icon : <FaHospitalAlt /> ,
      num : 15 ,
      text : 'Departments'
    },
    {
      icon : <ImLab /> ,
      num : 8 ,
      text : 'Research Labs'
    },
    {
      icon : <FaAward /> ,
      num : 150 ,
      text : 'Awards'
    }
  ]
  const details = [
    {
      icon : <FaHeartbeat />,
      title : 'Officia Architecto' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    },
    {
      icon : <GiMedicines />,
      title : 'Molestiae Numquam' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    },
    {
      icon : <BsFillFileMedicalFill />,
      title : 'Saepe Eerum' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    },
    {
      icon : <FaDna />,
      title : 'Odolorem Reiciendis' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    },
    {
      icon : <FaWheelchair />,
      title : 'Laboriosam Expedita' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    },
    {
      icon : <FaNotesMedical />,
      title : 'Neque Placeat' ,
      text : 'Lorem ipsum dolor sit amet. Ad iusto ipsa quo rerum modi et maxime natus ea reprehenderit amet'
    }
  ]
  const doctors = [
    {
      img : '/images/doctors/doctors-1.jpg',
      name : 'Walter White',
      role : 'Chef Medical Officer'
    },
    {
      img : '/images/doctors/doctors-2.jpg',
      name : 'Sarah Jhonson',
      role : 'Anesthesiologist'
    },
    {
      img : '/images/doctors/doctors-3.jpg',
      name : 'William Anderson',
      role : 'Cardiology'
    },
    {
      img : '/images/doctors/doctors-4.jpg',
      name : 'Amanda Jepson',
      role : 'Neurosurgeon'
    }
  ]
  const questions = [
    { 
      question : 'Placerat erat hendrerit leo nullam efficitur ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
    { 
      question : 'Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea. ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
    { 
      question : 'Augue etiam class. Tristique ac himenaeos etiam el ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
    { 
      question : 'Tristique ac himenaeos etiam eleifend erat commodo ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
    { 
      question : 'Placerat bibendum eros; mauris eu tempor nam ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
    { 
      question : 'Cubilia porttitor molestie non risus ultricies in et faucibus ?',
      answer : 'quam amet. Arcu eget augue sociosqu; tempus sodales senectus. Dolor aptent phasellus nisl, fames magnis nulla imperdiet netus platea.'
    },
  ]
  const contact = {
    map : 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48383.14027358619!2d-73.99119931813341!3d40.719199355851906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDowntown%20Conference%20Center%20new%20jersy!5e0!3m2!1sar!2snl!4v1725656495693!5m2!1sar!2snl',
    address : 'A108 Adam Street, New York, Ny 535022',
    phone : '+1 5589 55488 55',
    email : 'info@example.com'
  }
   
  

  return (
    <>
      <InfoBar />
      <NavBar logo={logo} items={items} text={btn}/>
      <Hero hero={hero}/>
      <Services services={services}/>
      <Help />
      <AboutUs />
      <Numbers numbers={numbers}/>
      <Lab />
      <ServicesDetails details={details}/>
      <Appointment />
      <Department />
      <Testimonials />
      <Doctors doctors={doctors}/>
      <Gallery />
      <Pricing />
      <Questions questions={questions}/>
      <Contact contact={contact}/>
      <Footer contact={contact}/>
    </>
  )
}

export default App
