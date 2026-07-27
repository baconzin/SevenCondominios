const https = require('https');
const search = (query) => {
  https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const results = JSON.parse(data).results;
        console.log(`\n--- Results for: ${query} ---`);
        results.forEach(r => console.log(r.id, r.description || r.alt_description));
      } catch (e) {
        console.error("Error parsing JSON", e);
      }
    });
  }).on('error', (e) => {
    console.error(e);
  });
};

search("sao paulo building");
search("brasil condominio");
search("brasil apartamento");
search("brasil obra");
search("brazil house");
