const Details = (props) =>{
    return(
        <div>
            <p>{props.users.firstname}</p>
            <p>{props.users.middlename}</p>
            <p>{props.users.lastname}</p>
            <p>{props.users.contactnumber}</p>
            <p>{props.users.occupation}</p>
            <p>{props.users.email}</p>
            <p>{props.users.password}</p>
        </div>
    )
}
export default Details;