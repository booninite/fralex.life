// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const albumId = "gm34wGiEgG9Q48yD6"

export default async (req, res) => {
  try {
    const results = await getAlbum(albumId)
    res.statusCode = 200
    res.json(results)
  } catch (e) {
    res.status(500)
  }
}

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
 const links = new Set()
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`)
  return extractPhotos(response.data)
}
