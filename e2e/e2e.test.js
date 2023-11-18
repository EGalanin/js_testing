// import puppeteer from 'puppeteer';
// import { fork } from 'child_process';

// jest.setTimeout(30000);

// describe('Card Form', () => {
//   let browser;
//   let page ;
//   let server ;
//   const baseUrl = 'http://localhost:9000';

//   beforeEach(async () => {
//     server = fork(`${__dirname}/e2e.server.js`);
//     await new Promise((resolve, reject) => {
//       server.on('error', reject);
//       server.on('message', (message) => {
//         if (message === 'ok') {
//           resolve();
//         }
//       });
//     });

//     browser = await puppeteer.launch({
//       // headless: false,
//       // slowMo: 100,
//       // devtools: true,
//     });
//     page = await browser.newPage();    
//   });

//   afterEach(async () => {
//     await browser.close();
//     server.kill();
//   }); 

//   test('', async () => {});
  
// });



//   // test.each([
//   //   ['.success-message', 'valid', '4556765265954626'],
//   //   ['.error-message', 'invalid', '4556765265954621'],
//   //   ['.error-message', 'invalid', '45567'],
//   //   ['.error-message', 'invalid', ''],
//   // ])('Добавит класс', async (message, _, cardNumber) => {
//   //   await page.goto(baseUrl);
//   //   await page.waitForSelector('#form');

//   //   const form = await page.$('#form');
//   //   const input = await form.$('.input');
//   //   const button = await form.$('.button');

//   //   await input.type(cardNumber);
//   //   await button.click();

//   //   await page.waitForSelector(message);
//   // });

//   // test('должен проверить валидный номер кредитной карты', async () => {
//   //   await page.goto(baseUrl);
//   //   await page.waitForSelector('#form');

//   //   const form = await page.$('#form');
//   //   const input = await form.$('.input');
//   //   const button = await form.$('.button');

//   //   await input.type('4556765265954621');
//   //   await button.click();

//   //   await page.waitForSelector('.success-message');
//   // });

//   test('', async () => {});
// });


const puppeteer = require('puppeteer');
const baseUrl = 'http://localhost:9000';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // Instructs the blank page to navigate a URL
  // await page.goto(baseUrl);
    
  await browser.close();
})();

test('', async () => {});

test.each([
  ['.success-message', 'valid', '4556765265954626'],
  ['.error-message', 'invalid', '455676526595462111'],
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
