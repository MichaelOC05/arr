// import React from  'react'
// import { AuthContext, useToken } from './TokenContext'
// import Cookies from "universal-cookie"

// class LoginForm extends React.Component {
    
//     static contextType = AuthContext
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: "",
//             password: "",
//         };
//         this.handleChangeUsername = this.handleChangeUsername.bind(this)
//         this.handleChangePassword = this.handleChangePassword.bind(this)
//         this.handleLogin = this.handleLogin.bind(this)
//     }
//     async handleLogin (event) {
//         event.preventDefault()
//         const login = useToken()
//         console.log(login)

//         const data = {...this.state}
//         const dataUsername = data["username"]
//         const dataPassword = data["password"]
//         // not sure if need await probably need to 
//         login(dataUsername, dataPassword)
//         const token = this.context.token
//         const cookies = new Cookies()
//         //  this creates a cookie in the browswer the path means that it is accessible everywhere in the program
//         cookies.set("jwt_access_token", token, { path: "/" })
//     }
//     handleChangeUsername(event) {
//         const value = event.target.value
//         this.setState({"username": value})
//     }
//     handleChangePassword(event) {
//         const value = event.target.value
//         this.setState({"password": value})
//     }

//     render() {
//         return(
//                 <div className="row">
//                   <div className="offset-3 col-6">
//                     <div className="shadow p-4 mt-4">
//                       <h1>Login</h1>
//                       <form onSubmit={this.handleLogin} id="create-conference-form">
//                         <div className="form-floating mb-3">
//                           <input onChange={this.handleChangeUsername} placeholder="Username" required type="text" name="username" id="nuserame" className="form-control" />
//                           <label htmlFor="name">Username</label>
//                         </div>
//                         <div className="form-floating mb-3">
//                           <input onChange={this.handleChangePassword} placeholder="Password" type="text" name="password" id="password" className="form-control" />
//                           <label htmlFor="employee_number">Password</label>
//                         </div>
//                         <div className="mb-3">
//                         </div>
//                         <button className="btn btn-primary">Login</button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>    

//         )
        
//     }
// }

// export default LoginForm