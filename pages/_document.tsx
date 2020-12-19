import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preload" href="https://fonts.gstatic.com" as="style" />
          <link
            rel="preload"
            href="https://lh3.googleusercontent.com"
            as="style"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
