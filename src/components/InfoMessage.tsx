import uuid from "uuid";
import { IChatMessage } from "./ChatMessage";

export default class InfoMessage implements IChatMessage {
  id: string;
  message: string;
  username: string;

  constructor(message: string) {
    this.message = message;
    this.id = uuid.v4();
    this.username = "Moobot";
  }
}
