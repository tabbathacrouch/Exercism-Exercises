export class Gigasecond {
  _moment;
  constructor(moment: Date) {
    this._moment = moment;
  }
  public date() {
    return new Date(this._moment.getTime() + 10 ** 9 * 1000);
  }
}
