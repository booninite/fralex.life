import Head from 'next/head'
import FralexLife from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Francesca + Alex | Alex + Francesca</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>
        <script src="./countdown.js"></script>
      </Head>

      <FralexLife></FralexLife>

    </div>
  )
}
