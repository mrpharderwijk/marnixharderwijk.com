export default class MathHelper {
  /**
   * rounds a number by the scale/decimals given
   * see https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
   * @param {number} num to round
   * @param {number} scale decimals behind the comma
   * @returns {number} rounded number
   */
  static roundNumber(num, scale) {
    if (!(`${num}`).includes('e')) {
      return +(`${Math.round(`${num}e+${scale}`)}e-${scale}`);
    }
    const arr = (`${num}`).split('e');
    let sig = '';

    if (+arr[1] + scale > 0) {
      sig = '+';
    }
    return +(Math.round(`${+arr[0]}e${sig + (+arr[1] + scale)})e-${scale}`));
  }
}
