import CardWidget from './CardWidget';
import Algorithm from './Algorithmm';

const cardWidget = new CardWidget(document.querySelector('.cards-widget'));
cardWidget.bindToDom();

const algorithm = new Algorithm(cardWidget);
algorithm.initialize();
