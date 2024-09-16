 function Login() {
  const onLogin=(event)=>{
        event.preventdefault();
         console.log("on Validate method:;;;;");
    }
  
  return (
    <>
      <div>
        <form onSubmit={onLogin}>
        <table>
          <tr>
            <td>Email/Username:</td>
            <td><input type="email"/></td>
          </tr>
          <tr>
            <td>Pasword:</td>
            <td><input type="password"/></td>
          </tr>
          <tr>
            <td> </td>
            <td><button type="submit">Login</button></td>
          </tr>
        </table>
        <hr/>
        </form>
        </div>
    </>
  )
}

export default Login;