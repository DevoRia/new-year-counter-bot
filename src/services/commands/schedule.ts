import {Command} from "./command";
import {Bot} from "../../helper/bot";
import {Message} from "../../interfaces/message";
import {Repository} from "../database/repository";
import {GroupStructure} from "../database/models/group.model";

export class ScheduleCommand {
  constructor(private bot: Bot,
              private repository: Repository) {
  }

  sendNotifications(): void {

  }
}