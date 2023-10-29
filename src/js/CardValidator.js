export default class CardValidator {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.checkCard = this.checkCard.bind(this);
  }

  showType() {
    return this.type;
  }

  highlighCard(type) {
    [...this.cards].find((item) => item.classList.contains(type)).classList.remove('hide');
  }

  checkCard(value) {
    this.cards.forEach((item) => item.classList.add('hide'));
    this.type = null;

    // for Visa
    if (value.startsWith('4')) {
      this.highlighCard('visa');
      this.type = 'Visa';
      return;
    }

    // for MasterCard
    if (value.startsWith('5') && value[1] > 0 && value[1] < 6) {
      this.highlighCard('mastercard');
      this.type = 'MasterCard';
      return;
    }

    // for Mir
    if (value.startsWith('2')) {
      this.highlighCard('mir');
      this.type = 'Mir';
      return;
    }

    // for American-Express
    if (value.startsWith('34') || value.startsWith('37')) {
      this.highlighCard('american-express');
      this.type = 'American-Express';
      return;
    }

    // for Discover
    if (value.startsWith('65') || value.startsWith('6011')) {
      this.highlighCard('discover');
      this.type = 'Discover';
      return;
    }

    // for JCB
    if (value.startsWith('35')) {
      this.highlighCard('jcb');
      this.type = 'JCB';
    }
  }
}
