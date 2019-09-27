import React, { Component } from "react";
import { IChatMessage } from "./ChatMessage";

interface IInfoMessageRendererProps {
  message: IChatMessage;
}

export default class InfoMessageRenderer extends Component<
  IInfoMessageRendererProps
> {
  // constructor(props: IInfoMessageRendererProps) {
  //   super(props);
  // }

  render() {
    return (
      <div className="chat-message">
        <span>{this.props.message.username}</span>
        {": "}
        <span>{this.props.message.message} has joined the chatroom!</span>
      </div>
    );
  }
}
