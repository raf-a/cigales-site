import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { getScriptSrc } from "utils/prismic";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script async defer src={getScriptSrc()} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
