import '../styles/globals.css'
import '../styles/style.css'
import Countdown from 'react-countdown';
import React from 'react';
import Head from 'next/head'
import Dynamic from 'next/dynamic'

const ImageGalleryNoSSR = Dynamic(
  () => import('../components/gallery'),
  { ssr: false}
)

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <JustMarried />;
  } else {
    // Render a countdown
    return <p>{days} days to go!</p>;
  }
};

const JustMarried = () => <p>~*~ just married ~*~</p>

function FralexLife() {
  return (
    <div>
      <Head>
        <title>Francesca + Alex | Alex + Francesca</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>

      <div className="container">
      <header>
        <section>
          <h1>Alex & Francesca</h1>
          <p>December 24, 2020 &#8226; Durham, NC</p>
          <Countdown className="countdown" renderer={renderer} date={new Date("Dec 24, 2020 14:00:00").getTime()}></Countdown>
        </section>
        <section className="navbar">
          <div className="navbarItems">
            <a href="#">Home</a>
            <a href="#" aria-disabled="true">Livestream</a>
            <a target="_blank" href="https://www.amazon.com/wedding/registry/1J6VW456EVRB7?ref=wr_search_page_result_">Registry</a>
          </div>
        </section>
      </header>
      </div>


      <main>      
        <ImageGalleryNoSSR></ImageGalleryNoSSR>
        
        <p></p>
      </main>

    </div>
  )
}

export default FralexLife
