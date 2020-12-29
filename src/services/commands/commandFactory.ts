import {Type} from "../../interfaces/message";
import {Bot} from "../../helper/bot";
import {Repository} from "../database/repository";
import {GroupCommand} from "./group";
import {PrivateCommand} from "./private";
import {Command} from "./command";

export const commandFactory = (type: Type, bot: Bot, repository: Repository): Command => {
  switch (type) {
    case Type.GROUP: return new GroupCommand(bot, repository);
    default: return new PrivateCommand(bot, repository);
  }
}