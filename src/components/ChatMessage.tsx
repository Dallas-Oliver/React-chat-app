import uuid from "uuid";

export interface IChatMessage {
  message: string;
  id: string;
  username: string;
}

export class ChatMessage implements IChatMessage {
  username: string;
  message: string;
  id: string;

  constructor(username: string, message: string) {
    this.username = username;
    this.message = message;
    this.id = uuid.v4();
  }
}
