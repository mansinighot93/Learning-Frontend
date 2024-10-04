const Login=()=>{

    return(
        <div>
            <h2>Are You Member?</h2>
            <form>
                <label>Email ID:-</label><input type="email" name="email" value="" /><br/>
                <label>Password:-</label><input type="password" name="password" value="" /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login;