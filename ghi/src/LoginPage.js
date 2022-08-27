import React from  'react'
import { AuthContext } from './TokenContext'

class LoginForm extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        };
        
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    async handleLogin (event) {
        
    }
    async handleChangeUsername(event) {
        event.preventDefault()

    }
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default LoginForm