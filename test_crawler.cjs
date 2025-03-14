const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Track all redirects
    page.on('response', response => {
        if (response.status() >= 300 && response.status() < 400) {
            console.log(`Redirect detected: ${response.url()} → ${response.headers()['location']}`);
        }
    });

    const targetURL = 'https://github.com/maazshaikh2079/HackSpark-Topics/blob/main/HackSpark-Topics.pdf'; // Change this to the URL you want to test
    await page.goto(targetURL, { waitUntil: 'domcontentloaded' });

    console.log(`Final URL: ${page.url()}`);

    await browser.close();
})();