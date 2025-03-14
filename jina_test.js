import https from 'https';

const userInput = "https://github.com/maazshaikh2079/HackSpark-Topics/blob/main/HackSpark-Topics.pdf"
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

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
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
