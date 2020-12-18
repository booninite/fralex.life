const axios = require("axios");
const fs = require("fs");

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)",(\d+),(\d+)/g;

function extractPhotos(content) {
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add({ url: match[1], width: match[2], height: match[3] });
  }
  return Array.from(links);
}

async function getAlbum() {
  const response = await axios.get(
    `https://photos.google.com/share/AF1QipMB7-jnM6gLtjVU_1cUAAuIwqpCudWjsT9gyitTUnmrJ7CcbLgnYLZ4pZJLiAmLtw?key=clY2WDdJUUZjUFd5c1VQa05vVDNaVEJOTzRIYklB`
  );
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
