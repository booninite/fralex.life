const axios = require('axios');
const fs = require('fs');

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
 const links = new Set()
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}

async function getAlbum() {
  const response = await axios.get(`https://photos.google.com/share/AF1QipMB7-jnM6gLtjVU_1cUAAuIwqpCudWjsT9gyitTUnmrJ7CcbLgnYLZ4pZJLiAmLtw?key=clY2WDdJUUZjUFd5c1VQa05vVDNaVEJOTzRIYklB`)
  return extractPhotos(response.data)
}

(async function run() {
  const urls = (await getAlbum()).map(url => ({
    original: `${url}=w750-h750`,
    thumbnail: `${url}=w250-h100`
  }))
  fs.writeFileSync('assets/pix.json', JSON.stringify(urls, null, 2))
})()