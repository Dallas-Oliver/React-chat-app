import React, { Component } from "react";
import Chat from "./Chat";
import ChatInput from "./Input";
import io from "socket.io-client";
import generateUsername from "../RandomUsername";
import { IChatMessage, ChatMessage } from "./ChatMessage";
import InfoMessage from "./InfoMessage";
import Video from "./video";

interface IHomepageState {
  username: string;
  socket: SocketIOClient.Socket | null;
  messages: IChatMessage[];
}

class Homepage extends Component<{}, IHomepageState> {
  constructor(props: {}, state: Readonly<IHomepageState>) {
    super(props, state);
    this.state = {
      username: generateUsername(),
      socket: null,
      messages: []
    };
  }

  submitMessageHandler = (message: string) => {
    const messageItem = new ChatMessage(this.state.username, message);
    this.setState({ messages: [...this.state.messages, messageItem] });

    if (this.state.socket != null) {
      this.state.socket.emit("chat message", messageItem);
    }
  };

  UserHasJoinedMessageHandler = (username: string, message: string) => {
    const infoMessage = new InfoMessage(username, message);
    this.setState({ messages: [...this.state.messages, infoMessage] });
  };

  componentDidMount() {
    const socket = io("localhost:4001");

    socket.on("connect", () => {
      socket.emit("welcome message", this.state.username);
    });

    socket.on("joined", (username: string, message: string) => {
      return this.UserHasJoinedMessageHandler(username, message);
    });

    socket.on("chat message", (messageItem: IChatMessage) => {
      console.log(messageItem, this.state.messages);
      this.setState({ messages: [...this.state.messages, messageItem] });
    });
    this.setState({ socket: socket });
  }

  render() {
    return (
      <div className="homepage">
        <section className="chat-element">
          <Chat messages={this.state.messages} />
          <ChatInput submitMessage={this.submitMessageHandler} />
        </section>

        <Video />
      </div>
    );
  }
}

export default Homepage;
