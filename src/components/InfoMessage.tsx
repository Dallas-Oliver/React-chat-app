import uuid from "uuid";
import { IChatMessage } from "./ChatMessage";

export default class InfoMessage implements IChatMessage {
  type = "InfoMessage";
  id: string;
  message: string;
  username: string;

  constructor(username: string, message: string) {
    this.message = message;
    this.id = uuid.v4();
    this.username = username;
  }
}
