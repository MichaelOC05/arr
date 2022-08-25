import React from  'react'

class LoginForm extends React.Component {
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
}

export default LoginForm