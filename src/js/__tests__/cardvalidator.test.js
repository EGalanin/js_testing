import CardValidator from '../CardValidator';
import CardWidget from '../CardWidget';

document.body.innerHTML = `
        <div class="widget-container">
        <h2>Credit Card Validator</h2>
        <div class="cards-widget"></div>
        </div>`;

const cardWidget = new CardWidget(document.querySelector('.cards-widget'));
cardWidget.bindToDom();
const cardValidator = new CardValidator();

test.each([
  ['Visa', '4'],
  ['MasterCard', '53'],
  ['Mir', '2'],
  ['American-Express', '34'],
  ['Discover', '65'],
  ['JCB', '35'],
])('карточка должна начинаться с', (expected, digits) => {
  cardValidator.checkCard(digits);
  expect(cardValidator.type).toBe(expected);
});

test('Должен вернуть тип карты', () => {
  cardValidator.type = 'Mir';
  expect(cardValidator.showType()).toBe('Mir');
});
