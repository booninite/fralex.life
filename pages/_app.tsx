import "../styles/globals.css";
import "../styles/style.css";
import React from "react";
import Head from "next/head";
import Dynamic from "next/dynamic";
const DaysTill = Dynamic(() => import("../components/daystill"), {
  ssr: false,
});
const ImageGallery = Dynamic(() => import("../components/gallery"), {
  ssr: false,
});

function FralexLife() {
  return (
    <div>
      <Head>
        <title>Francesca + Alex | Alex + Francesca</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Francesca + Alex == FrAlex" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Raleway:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <header>
          <section>
            <h1>Alex & Francesca</h1>
            <p>December 24, 2020 &#8226; Durham, NC</p>
            <DaysTill />
          </section>
          <section className="navbar">
            <div className="navbarItems">
              <a href="#">Home</a>
              <a href="#" aria-disabled="true">
                Livestream
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.com/wedding/registry/1J6VW456EVRB7?ref=wr_search_page_result_"
              >
                Registry
              </a>
            </div>
          </section>
        </header>
      </div>

      <main>
        <ImageGallery />

        {/* <p></p> */}
      </main>
    </div>
  );
}

export default FralexLife;
