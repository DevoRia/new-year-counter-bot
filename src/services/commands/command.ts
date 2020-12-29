import {Bot} from "../../helper/bot";
import {Message, Type} from "../../interfaces/message";
import {PrivateCommand} from "./private";
import {GroupCommand} from "./group";
import {Repository} from "../database/repository";

export interface Command {
  reply(message: Message): void
  persistMessageInfo(message: Message): void
}

export const commandFactory = (type: Type, bot: Bot, repository: Repository): Command => {
  switch (type) {
    case Type.GROUP: return new GroupCommand(bot, repository);
    default: return new PrivateCommand(bot, repository);
  }
}