import pix from "../assets/pix.json";
import { shuffle } from "lodash";
import Image from "next/image";
// import "lazysizes";
// import a plugin
// import "lazysizes/plugins/parent-fit/ls.parent-fit";

function ImageGallery() {
  const images = shuffle(pix);
  return (
    <div className="ml">
      {/* <Image
        src="https://via.placeholder.com/150"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      {images.map((i, iteration) => {
        return (
          <div key={i.src} className="ml-pnl">
            <picture>
              <source srcSet={i.src + "?format=webp"} type="image/webp" />
              <source srcSet={i.src} type="image/jpeg" />
              <Image
                key={i.src}
                src={i.src}
                alt={iteration + ""}
                width={i.width}
                height={i.height}
                className="ml-pnl__cntnt"
                layout="responsive"
              />
              {/* <img
                className="ml-pnl__cntnt"
                // className={`ml-pnl__cntnt lazyload`}
                key={i.src}
                src={i.src}
                // data-src={i.src}
                // Lets not talk about this
                alt={iteration + ""}
                width={i.width}
                height={i.height}
              /> */}
            </picture>
          </div>
        );
      })}

      <style jsx>{`
        /* MASONRY CSS */
        .ml {
          box-sizing: border-box;
          column-count: 1;
          column-gap: 0;
          position: relative;
        }
        .ml * {
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .ml {
            column-count: 2;
          }
        }
        @media (min-width: 1200px) {
          .ml {
            column-count: 3;
          }
        }
        .ml-pnl {
          margin: 0;
          padding: 5px;
        }

        @media (min-width: 768px) {
          .ml-pnl {
            break-inside: avoid;
          }
        }
        .ml-pnl__cntnt {
          overflow: hidden;
          width: 100%;
        }
        .ml-pnl__cntnt--img {
          max-width: 100%;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default ImageGallery;
