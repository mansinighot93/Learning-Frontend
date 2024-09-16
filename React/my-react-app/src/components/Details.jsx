
const Details=(props)=>{
    return(
        <div>
            <img src={props.product.imageurl} width="100" height="100"/>
            <p>{props.product.title}</p>
            <p> ${props.product.unitprice}</p>    
            <p>Stock available: {props.product.quantity}</p>
            <p>Likes:{props.product.likes}</p>
            <button>Like</button>
        </div>
    );
}

export default Details;


//<p>{props.product.description}</p>
