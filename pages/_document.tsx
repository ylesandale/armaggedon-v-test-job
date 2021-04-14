import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): any {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <title>Armaggedon-v-test</title>
        </Head>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
