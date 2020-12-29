import {Bot} from "../../helper/bot";
import {Message, Type} from "../../interfaces/message";
import {ScheduleCommand} from "./schedule";
import {PrivateCommand} from "./private";
import {GroupCommand} from "./group";

export interface Command {
  reply(message: Message): void
}

type CommandTypes = CommandType | Type;

export enum CommandType {
  SCHEDULE = 'schedule'
}

export const commandFactory = (type: CommandTypes, bot: Bot): Command => {
  switch (type) {
    case CommandType.SCHEDULE: return new ScheduleCommand(bot);
    case Type.GROUP: return new GroupCommand(bot);
    default: return new PrivateCommand(bot);
  }
}