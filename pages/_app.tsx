import '../styles/globals.css'
import '../styles/style.css'
import pix from '../assets/pix.json'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import { shuffle } from 'lodash';


function FralexLife() {
  const images = shuffle(pix)
  return (
    <div className="container">
        <header>
          <section>
            <h1>Alex & Francesca</h1>
            <p>December 24, 2020 &#8226; Durham, NC</p>
            <p className="countdown">placeholder</p>

          </section>
        </header>
      
    <ImageGallery 
    items={images}
    showThumbnails={false}
    autoPlay={true}
    slideDuration={500}
    />

    </div>
  )
}

export default FralexLife
