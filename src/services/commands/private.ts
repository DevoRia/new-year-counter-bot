import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Utils} from "../../helper/message.utils";
import {Repository} from "../database/repository";

export class PrivateCommand extends Command {
  constructor(bot: Bot,
              repository: Repository) {
    super(bot, repository);
  }
  reply(message: Message): void {
    if (message.text === '/нг') {
      this.sendCountToNewYear(message);
    } else {
      this.bot.sendMessage(Utils.getChatId(message), `${Utils.getFirstName(message)}, я знаю тільки /нг...`)
    }
    this.persistMessageInfo(message)
  }

  async persistMessageInfo(message: Message): Promise<void> {
    const userStructure = Utils.mapUser(message);
    const user = await this.repository.saveUser(userStructure);
    const messageStructure = Utils.mapMessage(message, user);
    await this.repository.saveMessage(messageStructure);
  }
}