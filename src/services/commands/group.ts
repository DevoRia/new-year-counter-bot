import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Utils} from "../../helper/message.utils";
import {Repository} from "../database/repository";
import {GroupStructure} from "../database/models/group.model";

export class GroupCommand implements Command {
  constructor(private bot: Bot,
              private repository: Repository) {
  }

  reply(message: Message): void {
    const id = Utils.getChatId(message);
    const firstName = Utils.getFirstName(message);
    console.log(message);
    this.persistMessageInfo(message);
    this.bot.sendMessage(id, `${firstName}, я поки не вмію говорити. Але скоро зумію. З часом...`)
  }

  persistMessageInfo(message: Message): void {
    const groupStructure = this.mapGroup(message);
    this.repository.saveGroup(groupStructure);
  }

  private mapGroup(message: Message): GroupStructure {
    return {
      id: message.chat.id,
      title: message.chat.title,
    }
  }

}