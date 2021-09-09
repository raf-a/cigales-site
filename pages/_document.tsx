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
          <link href="favicon.ico" rel="shortcut icon" />
          <link
            href="apple-touch-icon-180x180.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
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
