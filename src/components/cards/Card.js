import './Card.css';

const Card = ({data}) => {
    
  return (
    <div className='cardContainer'>

        {data.map((item) =>{
            const {id,title, image, desc} = item;
            return(
                <div className="carddiv" key={id}>
                    <h1>{title}</h1>
                    <img className='imgg' src={image} alt="image" />
                    <p className='desc'>{desc}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Card