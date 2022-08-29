import { useState } from "react"
import { AuthContext, useToken } from "./TokenContext"
import Cookies from "universal-cookie"

function LoginForm (props) {
    const [inputField , setInputField] = useState({
        username: '',
        password: '',
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.first_name)
    }

return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={this.handleLogin} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={inputsHandler} placeholder="Username" required type="text" name="username" id="nuserame" className="form-control" />
              <label htmlFor="name">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={inputsHandler} placeholder="Password" type="text" name="password" id="password" className="form-control" />
              <label htmlFor="employee_number">Password</label>
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

export default  LoginForm