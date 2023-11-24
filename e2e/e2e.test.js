import puppeteer from 'puppeteer';
import { fork } from 'child_process';

describe('Card Form', () => {  
  let browser;
  let page;
  let server;
  const baseUrl = 'http://localhost:9000';

  beforeEach(async () => {
    // server = fork(`${__dirname}/e2e.server.js`);
    // await new Promise((resolve, reject) => {
    //   server.on('error', reject);
    //   server.on('message', (message) => {
    //     if (message === 'ok') {
    //       resolve();
    //     }
    //   });
    // });

    browser = await puppeteer.launch({
      // devtools: true,
      // headless: false,
      // slowMo: 250,
      headless: 'new',
    });
    page = await browser.newPage();
  });

  beforeAll(async () => {
    await browser.close();
    // server.kill();
  });

  test.each([
    ['.success-message', 'valid', '4556765265954626'],
    ['.error-message', 'invalid', '455676526595462111'],
    ['.error-message', 'invalid', '45567'],
    ['.error-message', 'invalid', ''],
  ] )('Добавит класс', async (message, _, cardNumber) => {
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