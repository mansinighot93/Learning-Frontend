const Register=()=>{

    return(
        <div>
            <h2>Membership Form</h2>
            <form>
                <label>First Name:-</label><input type="text" name="fisrtname" value="" /><br/>
                <label>Last Name:-</label><input type="text" name="lastname" value="" /><br/>
                <label>Email ID:-</label><input type="email" name="email" value="" /><br/>
                <label>Conatct Number:-</label><input type="number" name="contactnumber" value="" /><br/>
                <label>Password:-</label><input type="password" name="password" value="" /><br/>
                <button type="submit">Register</button><a href="./Register.jsx">sign Up?</a><br/>
                Already Have Your Account <a href="./Login.jsx">Login</a>
            </form>
        </div>
    )

}
export default Register;