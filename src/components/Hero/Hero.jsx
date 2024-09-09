import './Hero.css'
import {Carousel } from 'react-bootstrap';
import HeroCard from '../HeroCard/HeroCard';


const Hero = ({hero}) => {
  return (
    <Carousel fade className='carousel-style'> 
      {
        hero.map((element , index)=>{
          return (
            <Carousel.Item key={index}>
            <img src={element.path} alt={element.alt} />
            <Carousel.Caption className='position-relative'>
              <HeroCard title={element.title} content={element.content} btn={element.btn}/>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default Hero