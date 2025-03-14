import FirecrawlApp from "@mendable/firecrawl-js";
const userInput = "https://github.com/maazshaikh2079/HackSpark-Topics/blob/main/HackSpark-Topics.pdf";
const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer fc-14c5e6c8adc043508c40e67ed45ec59a',
      'Content-Type': 'application/json'
    },
    body: '{"formats":["markdown"],"onlyMainContent":true,"waitFor":0,"mobile":false,"skipTlsVerification":false,"timeout":30000,"location":{"country":"US"},"blockAds":true,"url":"https://api.github.com/users/maazshaikh2079"}'
  };
  
  fetch('https://api.firecrawl.dev/v1/scrape', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));