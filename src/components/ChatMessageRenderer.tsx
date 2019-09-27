import React, { Component } from "react";
import { IChatMessage } from "./ChatMessage";

interface IChatMessageRendererProps {
  message: IChatMessage;
}

class ChatMessageRenderer extends Component<IChatMessageRendererProps> {
  render() {
    return (
      <div className="chat-message">
        <span className="message-content">{this.props.message.username}</span>
        {": "}
        <span className="message-content">{this.props.message.message}</span>
      </div>
    );
  }
}

export default ChatMessageRenderer;
