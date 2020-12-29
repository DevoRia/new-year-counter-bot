import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";

export class ScheduleCommand implements Command {
  constructor(private bot: Bot) {
  }

  reply(message: Message): void {
  }


}