import { useState } from "react";
import { useToken } from "./TokenContext";
import { useNavigate } from "react-router-dom";


function LoginForm (props) {
    let [, login, , signup] = useToken()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [createUsername, setCreateUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [createPassword, setCreatePassword] = useState("")

    function handleUsername(e)  {
        setUsername(e.target.value)
    }
 
    function handlePassword(value) {
        setPassword(value.target.value)
    }

    function handleCreateUsername(e) {
      setCreateUsername(e.target.value)
    }

    function handleFirstName(e) {
      setFirstName(e.target.value)
    }

    function handleLastName(e) {
      setLastName(e.target.value)
    }

    function handleEmail(e) {
      setEmail(e.target.value)
    }

    function handleCreatePassword(e) {
      setCreatePassword(e.target.value)
    }

    async function submitButton(event) {
        event.preventDefault()
        await login(username, password)
        // let loginUrl = `${process.env.REACT_APP_LOCAL_HOST}monolith/login/authenticate/`
        // let data = [username, password]
        // let fetchConfig = {
        //   method: "POST",
        //   body: JSON.stringify(data),
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     credentials: "include",
        //   }
        // }
        // console.log("login", loginUrl)
        // let response = await fetch(loginUrl, fetchConfig)
        // const returnedMessage = await response.json()
        // console.log(returnedMessage)
        navigate("/")   
    }

    async function submitCreateButton(event) {
      event.preventDefault()
      await signup(createUsername, createPassword, email, firstName, lastName)
      // let createUserUrl = "http://localhost:8000/monolith/login/create_account/"
      navigate("/")
    }

return (
  <div className="bg-danger bg-gradient">
    <div className="row">
      <div className="offset-3 col-6 mt-5">
      <div className="bg-light bg-gradient">
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <h1>Login</h1>
          <form id="login-form">
            <div className="form-floating mb-3">
              <input onChange={handleUsername} placeholder="Username" required type="text" name="username" id="username" className="form-control"  />
              <label htmlFor="name">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePassword} placeholder="Password" type="password" name="password" id="password" className="form-control"  />
              <label htmlFor="employee_number">Password</label>
            </div>
            <div className="mb-3">
            </div>
            <button className="btn btn-primary" onClick={submitButton}>Login</button>
          </form>
        </div>
      </div>
      </div>
    </div> 
    <div className="row">
      <div className="offset-3 col-6 mt-5">
      <div className="bg-light bg-gradient">
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <h1>Create Account</h1>
          <form id="create-user-form">
            <div className="form-floating mb-3">
              <input onChange={handleCreateUsername} placeholder="Username" required type="text" name="username" id="create_username" className="form-control"  />
              <label htmlFor="name">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFirstName} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control"  />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleLastName} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control"  />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleEmail} placeholder="Email" required type="text" name="email" id="email" className="form-control"  />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleCreatePassword} placeholder="Password" type="password" name="password" id="create_password" className="form-control"  />
              <label htmlFor="employee_number">Password</label>
            </div>
            <div className="mb-3">
            </div>
            <button className="btn btn-primary" onClick={submitCreateButton}>Create Account</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  </div>   
 )
}

export default  LoginForm