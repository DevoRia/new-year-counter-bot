import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Utils} from "../../helper/message.utils";
import {Repository} from "../database/repository";

export class GroupCommand extends Command {
  constructor(bot: Bot,
              repository: Repository) {
    super(bot, repository);
  }

  reply(message: Message): void {
    if (message.text === '/нг') {
      this.sendCountToNewYear(message);
    }
    this.persistMessageInfo(message)
  }

  async persistMessageInfo(message: Message): Promise<void> {
    const groupStructure = Utils.mapGroup(message);
    const userStructure = Utils.mapUser(message);
    const group = await this.repository.saveGroup(groupStructure);
    const user = await this.repository.saveUser(userStructure);
    const messageStructure = Utils.mapMessage(message, user, group);
    await this.repository.saveMessage(messageStructure);
  }
}