import {Bot} from "./helper/bot";
import {Type} from "./interfaces/message";

const token: string = process.env.TOKEN as string;

class Application {

  main(): void {
    const bot = new Bot(token);

    bot.onMessage(message => {
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

      bot.sendMessage(id, messageToSend);
    })
  }

}

new Application().main();
