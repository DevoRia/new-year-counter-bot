import {Bot} from "./helper/bot";
import {Type} from "./interfaces/message";
import {MongoConnector} from "./services/mongoose";

const token: string = process.env.TOKEN as string;
const mongoUrl: string = process.env.DATABASE as string;

class Application {

  private bot: Bot;
  private mongo: MongoConnector;

  constructor() {
    this.bot = new Bot(token);
    this.mongo = new MongoConnector();
  }

  async start() {
    await this.init();
    setImmediate(() => this.main());
  }

  private async init(): Promise<void> {
    try {
      await this.mongo.init(mongoUrl);
    } catch (e) {
      console.error(e)
    }
  }

  private main(): void {
    this.bot.onMessage(message => {
      const id = message.chat.id;
      let messageToSend;

      switch (message.chat.type) {
        case Type.GROUP:
          messageToSend = message.from.first_name + ', ' + 'group';
          break;
        case Type.PRIVATE:
          messageToSend = message.from.first_name + ', ' + 'private';
          break;
      }

      this.bot.sendMessage(id, messageToSend);
    })
  }
}

const application = new Application();
application.start();

