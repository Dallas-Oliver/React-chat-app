import React, { Component } from "react";
import ChatMessageRenderer from "./ChatMessageRenderer";
import InfoMessageRenderer from "./InfoMessageRenderer";
import { IChatMessage, ChatMessage } from "./ChatMessage";
import InfoMessage from "./InfoMessage";

interface IChatProps {
  messages: IChatMessage[];
}

class Chat extends Component<IChatProps> {
  render() {
    // eslint-disable-next-line
    return this.props.messages.map(message => {
      if (message instanceof InfoMessage) {
        return <InfoMessageRenderer message={message} key={message.id} />;
      } else if (message instanceof ChatMessage) {
        return <ChatMessageRenderer message={message} key={message.id} />;
      }
    });
  }
}

export default Chat;
