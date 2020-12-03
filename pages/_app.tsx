import '../styles/globals.css'
import axios from 'axios';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getStaticProps() {
  const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
  const albumId = "gm34wGiEgG9Q48yD6"

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
  
  const pix = await getAlbum(albumId)
  return {
    props: {
      pix,
    }
  }
}

export default MyApp
