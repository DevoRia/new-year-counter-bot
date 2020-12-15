import {ICron} from "../interfaces/cron";

const CronJob = require('cron').CronJob;

class CronNotifier implements ICron {

  private job: any;

  setCron() {
    this.job = new CronJob('0 */12 * * *', () => {
      console.log('You will see this message every second');
    });
  }

  registry(): void {
    this.job.start();
  }

}
