import './Number.css'

const Numbers = ({numbers}) => {
  return (
    <>
    <div className="card__numbers">

    
    {
        numbers.map((element , index)=>{
            return (
                <div className="card mb-3 card-about border-0 d-flex ms-5 me-5 justify-content-around align-items-center flex-row shadow p-3 mb-2" key={index}>
                    <div className="card-icon fs-1 order-1 t-cyan">
                        {element.icon}
                    </div>
                    <div className="card-body order-2">
                        <h5 className="card-title t-black">{element.num}</h5>
                        <p className="card-text fs-6 t-black">{element.text}</p>
                    </div>
                </div>
            )
        
        })
    }

    </div>
    </>
  )
}

export default Numbers