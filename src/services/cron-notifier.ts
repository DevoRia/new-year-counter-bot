import {ICron} from "../interfaces/cron";

const CronJob = require('cron').CronJob;

class CronNotifier implements ICron {

  private job: any;

  setCron(job: () => void) {
    this.job = new CronJob('0 */12 * * *', job);
  }

  registry(): void {
    this.job.start();
  }

}
