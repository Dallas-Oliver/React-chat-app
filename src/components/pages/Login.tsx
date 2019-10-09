import React, { Component } from "react";

interface ICreateAccountState {
  username: string;
  password: string;
  createdAccount: boolean;
}

class CreateAccount extends Component<{}, ICreateAccountState> {
  constructor(props: {}, state: ICreateAccountState) {
    super(props, state);
    this.state = {
      username: "",
      password: "",
      createdAccount: false
    };
  }

  onSubmit = async (e: React.FormEvent) => {
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    //after creating an account, need to redirect user to either a login form or chatroom already logged in.
    e.preventDefault();
    const response = await fetch("/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json_response = await response.json();
    console.log(json_response);
  };

  render() {
    return (
      <div className="create-account-container">
        <h3>Please Create an Account</h3>
        <form className="create-account-form" onSubmit={this.onSubmit}>
          <input
            onChange={e => this.setState({ username: e.target.value })}
            value={this.state.username}
            type="text"
            placeholder="username"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
            type="password"
            placeholder="password"
          />
          <button className="btn btn-info" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
