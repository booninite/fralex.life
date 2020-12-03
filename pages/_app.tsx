import '../styles/globals.css'
import axios from 'axios';
import pix from '../assets/pix.json'

function FralexLife() {
  return (
    <ul>
      {pix.map((pic) => (<li><img src={pic}></img></li>))}
    </ul>
  )
}

export default FralexLife
