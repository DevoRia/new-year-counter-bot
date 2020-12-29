import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Repository} from "../database/repository";
import {Utils} from "../../helper/message.utils";
import {Counter} from "../counter";

export abstract class Command {
  constructor(protected bot: Bot,
              protected repository: Repository) {
  }

  abstract reply(message: Message): void;
  abstract persistMessageInfo(message: Message): void;


  protected sendCountToNewYear(message: Message) {
    const id = Utils.getChatId(message);
    const firstName = Utils.getFirstName(message);
    if (message.text === '/нг') {
      const diffTime = Counter.getTimeToNewYear();
      const days = diffTime.format('DD');
      this.bot.sendMessage(id, `${firstName}, до нового року залишилось: ${diffTime.format('DD')} ${Counter.getDayWord(days)} ${diffTime.format('HH:mm:ss')} \n 🎅❄️🎄`)
    } else {
      this.bot.sendMessage(id, `${firstName}, я знаю тільки /нг...`)
    }
    this.persistMessageInfo(message)
  }
}