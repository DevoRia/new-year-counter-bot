import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Utils} from "../../helper/message.utils";

export class GroupCommand implements Command {
  constructor(private bot: Bot) {
  }

  reply(message: Message): void {
    const id = Utils.getChatId(message);
    const firstName = Utils.getFirstName(message);
    this.bot.sendMessage(id, `${firstName}, я поки не вмію говорити. Але скоро зумію. З часом...`)
  }

}