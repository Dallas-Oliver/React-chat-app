import React, { Component } from "react";
import ChatMessageRenderer from "./ChatMessageRenderer";
import InfoMessageRenderer from "./InfoMessageRenderer";
import { IChatMessage } from "./ChatMessage";

interface IChatProps {
  messages: IChatMessage[];
}

class Chat extends Component<IChatProps> {
  render() {
    return (
      <div className="dialogue-box">
        {this.props.messages.map(message => {
          if (message.type === "InfoMessage") {
            return <InfoMessageRenderer message={message} key={message.id} />;
          } else if (message.type === "ChatMessage") {
            return <ChatMessageRenderer message={message} key={message.id} />;
          }
        })}
      </div>
    );
  }
}

export default Chat;

//node --experimental-modules server.mjs
