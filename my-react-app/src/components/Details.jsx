
const Details=(props)=>{
    
    return(
        <div> <h2>Flower Info</h2>
       
        <div className='card' style={{ margin: 'auto', padding: '10px', border: '1px solid #ccc', width: '200px', textAlign:'center', background:'pink'}}>
            <img src={props.product.imageurl} width="120" height="120"/>
            <p>{props.product.title}</p>
            <p> ${props.product.unitprice}</p>    
            <p>Stock available: {props.product.quantity}</p>
            <p>Likes:{props.product.likes}</p>
            <button>Like</button>
            </div>
        </div>
    );
}

export default Details;


//<p>{props.product.description}</p>
