import CardValidator from './CardValidator';

export default class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.cardTypes = ['visa', 'mastercard', 'mir', 'american-express', 'discover', 'jcb'];
  }

  static get markup() {
    return `
            <ul class="cards"></ul>
            <form id="form">
            <input class="input" type="text" placeholder="Credit card number">
            <button class="button">Click to Validate</button>
            </form>
            `;
  }

  bindToDom() {
    this.parentEl.insertAdjacentHTML('beforeend', CardWidget.markup);

    this.ul = this.parentEl.querySelector('.cards');
    this.input = this.parentEl.querySelector('.input');

    this.cardTypes.forEach((card) => {
      const li = document.createElement('li');
      li.classList.add('card', card);
      li.setAttribute('titel', card);
      this.ul.append(li);
    });

    this.cardValidator = new CardValidator();

    this.input.addEventListener('input', () => this.cardValidator.checkCard(this.input.value));
  }

  messageStatus(text) {
    this.form = document.getElementById('form');
    this.clearMessage();
    const message = document.createElement('p');
    if (text === 'empty') {
      message.classList.add('error-message');
      message.textContent = 'Введите номер карты';
    }
    if (text === 'wrong-number') {
      message.classList.add('error-message');
      message.textContent = 'Неверное количество цифр в номере карты';
    }
    if (text === 'wrong-card') {
      message.classList.add('error-message');
      message.textContent = `Ошибка! Номер карты неверен!\n Тип карты: ${this.cardValidator.showType()}`;
    }
    if (text === 'correct-card') {
      message.classList.add('success-message');
      message.textContent = `Проверка прошла успешно!\n Тип карты: ${this.cardValidator.showType()}`;
    }
    this.form.insertAdjacentElement('afterend', message);
  }

  clearMessage() {
    const removeEl = this.form.nextElementSibling;
    if (removeEl) {
      removeEl.remove();
    }
  }
}
