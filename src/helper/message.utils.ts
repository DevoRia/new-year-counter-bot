import {Message} from "../interfaces/message";

export class Utils {
  static getChatId(message: Message): number {
    return message.chat.id;
  }

  static getFirstName(message: Message): string {
    return message.from.first_name;
  }
}