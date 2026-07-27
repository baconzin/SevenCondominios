const https = require('https');
const search = (query) => {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url&format=json`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const pages = JSON.parse(data).query.pages;
        console.log(`\n--- Results for: ${query} ---`);
        for (const id in pages) {
          console.log(pages[id].imageinfo[0].url);
        }
      } catch (e) {
        console.error("Error", e.message);
      }
    });
  });
};

search("filetype:bitmap prédio em construção brasil");
search("filetype:bitmap sao paulo aerial view");
