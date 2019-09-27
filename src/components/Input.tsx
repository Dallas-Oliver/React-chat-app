import React, { Component } from "react";

interface IChatInputState {
  message: string;
}

interface IChatInputProps {
  submitMessage: (message: string) => void;
}

class ChatInput extends Component<IChatInputProps, IChatInputState> {
  constructor(props: IChatInputProps, state: IChatInputState) {
    super(props, state);

    this.state = {
      message: ""
    };
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.submitMessage(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          placeholder="chat here..."
        />
        <button type="submit">Chat</button>
      </form>
    );
  }
}

export default ChatInput;
