const axios = require("axios");
const fs = require("fs");

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)",(\d+),(\d+)/g;

let albumURL =
  // "https://photos.google.com/share/AF1QipOSFtHEv9NWA7heO2RUGkmEnBMlfZ9g7qQ-_ybCeiQ8Qkqsi1HjjPIcbRXUFMWtig?key=d25tWUkyWjhfbGN0S2NwOW1ELTZrYUJnU3VMRTdn";
  `https://photos.google.com/share/AF1QipMB7-jnM6gLtjVU_1cUAAuIwqpCudWjsT9gyitTUnmrJ7CcbLgnYLZ4pZJLiAmLtw?key=clY2WDdJUUZjUFd5c1VQa05vVDNaVEJOTzRIYklB`;

function extractPhotos(content) {
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add({ url: match[1], width: match[2], height: match[3] });
  }
  return Array.from(links);
}

async function getAlbum() {
  const response = await axios.get(albumURL);
  return extractPhotos(response.data);
}

(async function run() {
  const pics = (await getAlbum()).map(pic => ({
    src: pic.url,
    width: pic.width,
    height: pic.height,
  }));
  fs.writeFileSync("assets/pix.json", JSON.stringify(pics, null, 2));
})();
