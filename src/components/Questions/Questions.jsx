import Title from '../Title/Title'
import './Questions.css'
import {Accordion} from 'react-bootstrap'

const Questions = ({questions}) => {
  return (
    <div className='question__container b-light'>
        <Title title="Frequently Asked Questions" desc="Placerat bibendum eros; mauris eu tempor nam." />
        <div className='d-flex justify-content-center flex-column gap-4 align-items-center'>
            {
                questions.map((element , index)=>{
                    return (
                        <Accordion className='w-75' key={index}>
                            <Accordion.Item >
                                <Accordion.Header>{element.question}</Accordion.Header>
                                <Accordion.Body>
                                {element.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }
           
        </div>
        
    </div>
  )
}

export default Questions