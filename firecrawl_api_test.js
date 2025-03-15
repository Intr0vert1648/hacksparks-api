import fs from 'fs';

const userInput = "https://github.com/maazshaikh2079/HackSpark-Topics.git";
const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer fc-14c5e6c8adc043508c40e67ed45ec59a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        formats: ["markdown"],
        onlyMainContent: true,
        waitFor: 0,
        mobile: false,
        skipTlsVerification: false,
        timeout: 30000,
        location: { country: "US" },
        blockAds: true,
        url: userInput
    })
};

fetch('https://api.firecrawl.dev/v1/scrape', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        
        // Save response to file
        const fileName = `json/response_${Date.now()}.json`;
        fs.writeFile(fileName, JSON.stringify(response, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log(`Data saved to ${fileName}`);
            }
        });
    })
    .catch(err => console.error(err));
