import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Card Form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
    //   headless: true,
    //   slowMo: 100,
    //   devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  // test('Проверит валидный номер', async () => {
  //   await page.goto(baseUrl);
  //   const form = await page.$('#form');
  //   const input = await form.$('.input');
  //   const button = await form.$('.button');

  //   await input.type('4556765265954626');
  //   await button.click();
  //   await page.waitForSelector('.success-message');
  // });

  test.each([
    ['.success-message', 'valid', '4556765265954626'],
    ['.error-message', 'invalid', '4556765265954621'],
    ['.error-message', 'invalid', '45567'],
    ['.error-message', 'invalid', ''],
  ])('Добавит класс', async (message, _, cardNumber) => {
    await page.goto(baseUrl);
    await page.waitForSelector('#form');

    const form = await page.$('#form');
    const input = await form.$('.input');
    const button = await form.$('.button');

    await input.type(cardNumber);
    await button.click();

    await page.waitForSelector(message);
  });
});
