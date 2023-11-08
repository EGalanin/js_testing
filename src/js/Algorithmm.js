export default class Algorithm {
  constructor(widget) {
    this.widget = widget;
    this.input = document.querySelector('.input');
    this.form = document.getElementById('form');
    this.validateNumber = this.validateNumber.bind(this);
    this.calcCheckNum = this.calcCheckNum.bind(this);
  }

  initialize() {
    this.form.addEventListener('submit', this.validateNumber);
  }

  validateNumber(even) {
    even.preventDefault();

    const { value } = this.input;

    if ((value.length === 19 || value.length >= 13) && (value.length <= 16)) {
      const checkNumber = Number(value[value.length - 1]);
      const checkNumComputed = this.calcCheckNum(value);

      if (checkNumComputed === checkNumber) {
        this.widget.messageStatus('correct-card');
      } else {
        this.widget.messageStatus('wrong-status');
      }
    } else if (value.length === 0) {
      this.widget.messageStatus('empty');
    } else {
      this.widget.messageStatus('wrong-number');
    }
  }

  /* eslint-disable class-methods-use-this */
  calcCheckNum(value) {
    const invertedArr = value.slice(0, value.length - 1).split('').reverse().map(Number);

    invertedArr.forEach((item, i) => {
      if (i === 0 || i % 2 === 0) {
        invertedArr[i] = item * 2;
      }
    });

    invertedArr.forEach((item, i) => {
      if (item > 9) {
        invertedArr[i] = item - 9;
      }
    });

    const sum = invertedArr.reduce((acc, item) => acc + item);

    return 10 - (sum % 10);
  }
  /* eslint-enable class-methods-use-this */
}
