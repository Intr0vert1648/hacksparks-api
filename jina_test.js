import https from 'https';
import fs from 'fs';

const userInput = "https://drive.google.com/file/d/1iELQworLYVjSZvyZN8oxRg33HZWNNdlt/view?usp=sharing"
const postData = JSON.stringify({
  url: userInput
});

const options = {
  hostname: 'r.jina.ai',
  path: '/',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer jina_ac2c3bb1706a4d299f8e35050b6d8973jfvgk4BIjBWU3_OXX8e1MuifVEWB',
    'X-No-Cache': 'true',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const fileName = `mds/response_${Date.now()}.md`;
const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
    fs.writeFile(fileName,data, (err) =>
    {
      if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log(`Data saved to ${fileName}`);
    }
  });
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);
req.end();