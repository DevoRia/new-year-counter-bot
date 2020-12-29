import {Bot} from "./helper/bot";
import {MongoConnector} from "./services/mongoose";
import {commandFactory} from "./services/commands/commandFactory";
import {ICron} from "./interfaces/cron";
import {CronNotifier} from "./services/cron-notifier";
import {ScheduleCommand} from "./services/commands/schedule";
import {Repository} from "./services/database/repository";

const token: string = process.env.TOKEN as string;
const mongoUrl: string = process.env.DATABASE as string;

class Application {

  private readonly bot: Bot;
  private readonly repository: Repository;
  private mongo: MongoConnector;
  private cronService: ICron;
  private scheduleCommand: ScheduleCommand;

  constructor() {
    this.bot = new Bot(token);
    this.mongo = new MongoConnector();
    this.cronService = new CronNotifier();
    this.repository = new Repository();
    this.scheduleCommand = new ScheduleCommand(this.bot, this.repository);
  }

  async start() {
    await this.init();
    setImmediate(() => this.main());
  }

  private async init(): Promise<void> {
    try {
      await this.mongo.init(mongoUrl);
      this.cronService.setCron(this.scheduleCommand.sendNotifications);
      this.cronService.registry();
    } catch (e) {
      console.error(e)
    }
  }

  private main(): void {
    this.bot.onMessage(message =>
      commandFactory(message.chat.type, this.bot, this.repository)
        .reply(message)
    )
  }
}

const application = new Application();
application.start();

const  http = require('http');

http.createServer( (req:any, res:any) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('It works!');
  res.end();
}).listen(process.env.PORT);