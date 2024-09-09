import './Title.css'

const Title = ({title , desc}) => {
  return (
    <div className="title__container t-black">
        <h2>{title}</h2>
        <div className='title__border '></div>
        <p className='t-black'>{desc}</p>
    </div>
  )
}

export default Title