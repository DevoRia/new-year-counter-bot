import moment from "moment";
import {Message} from "../interfaces/message";
import {Utils} from "../helper/message.utils";

export class Counter {

  static newYearDay() {
    const nextYear = new Date().getFullYear() + 1;
    return new Date(`January 1, ${nextYear} 00:00:00`).getTime();
  }

  static getTimeToNewYear() {
    const currentTime = new Date().getTime();
    return moment.utc(moment(Counter.newYearDay()).diff(moment(currentTime)))
  }

  static getDayWord(dayStr: string) {
    if (dayStr.startsWith('0')) dayStr = dayStr.substr(1, dayStr.length);

    const day = parseInt(dayStr);
    if (day === 1) return 'день';
    if (day > 1 && day < 5) return 'дня';
    if (day > 5) return 'днів';
  }

}