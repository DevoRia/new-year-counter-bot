const TelegramBot = require('node-telegram-bot-api');

export class Bot {

  private readonly bot: any;

  constructor(private token: string) {
    this.bot = new TelegramBot(token, {polling: true});
  }

  getBot(): Bot {
    return this.bot;
  }

  onMessage(handler: (message: string) => void): void {
    this.bot.on('message', handler);
  }
}