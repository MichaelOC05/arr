import { useState } from "react"
import { useAuthContext, useToken } from "./TokenContext"
import Cookies from "universal-cookie"
// import Cookies from "universal-cookie"


function SignUpForm (props) {
    const [token, signup] = useToken()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function handleUsername(e)  {
        setUsername(e.target.value)
    }
 
    function handlePassword(value) {
        setPassword(value.target.value)
    }

    function submitButton(event) {
        event.preventDefault()
        signup(username, password)
        console.log(token)
    }

return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleUsername} placeholder="Username" required type="text" name="username" id="username" className="form-control"  />
              <label htmlFor="name">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePassword} placeholder="Password" type="text" name="password" id="password" className="form-control"  />
              <label htmlFor="employee_number">Password</label>
            </div>
            <div className="form-floating mb-3">

            </div>
            <div className="mb-3">
            </div>
            <button className="btn btn-primary" onClick={submitButton}>Login</button>
          </form>
        </div>
      </div>
    </div>    
 )
}

export default  SignUpForm