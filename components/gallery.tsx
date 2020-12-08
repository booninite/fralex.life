import pix from '../assets/pix.json'
import { shuffle } from 'lodash';
import ResponsiveGallery from 'react-responsive-gallery';

function ImageGallery () {
  const images = shuffle(pix)
  return <ResponsiveGallery 
    images={images}
  />
}

export default ImageGallery