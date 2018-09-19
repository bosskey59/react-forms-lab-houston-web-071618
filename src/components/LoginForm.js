import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password:""
    };
  }

  updateUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePass = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== ""){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.updateUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.updatePass} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
