export default class PhoneNumber {
  public phone: string;
  constructor() {
    this.phone = this.generate();
  }

  /**
   * @returns {string} Return malagasy phone number
   */
  public generate(): string {
    // patter: +261 aa bb ccc dd
    const aa = Math.floor(Math.random() * (35 - 32) + 32);
    const bb = this.oneZeroPrepend(Math.floor(Math.random() * 99));
    const cc = this.twoZeroPrepend(Math.floor(Math.random() * 999));
    const dd = this.oneZeroPrepend(Math.floor(Math.random() * 99));

    return `+261 ${aa} ${bb} ${cc} ${dd}`;
  }

  /**
   *
   * @param anyNumber Generally a number between 0 and 999
   * @returns {string}
   */
  private twoZeroPrepend(anyNumber: number): string {
    if (anyNumber < 10) {
      return '00' + anyNumber;
    }
    if (anyNumber >= 10 && anyNumber < 100) {
      return '0' + anyNumber;
    }
    return '' + anyNumber;
  }

  /**
   *
   * @param anyNumber Generally a number between 0 and 99
   * @returns {string}
   */
  private oneZeroPrepend(anyNumber: number): string {
    if (anyNumber < 10) {
      return '0' + anyNumber;
    }
    return '' + anyNumber;
  }
}
