import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Utils} from "../../helper/message.utils";
import {Repository} from "../database/repository";

export class GroupCommand implements Command {
  constructor(private bot: Bot,
              private repository: Repository) {
  }

  reply(message: Message): void {
    const id = Utils.getChatId(message);
    const firstName = Utils.getFirstName(message);
    this.bot.sendMessage(id, `${firstName}, я поки не вмію говорити. Але скоро зумію. З часом...`)
    this.persistMessageInfo(message);
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