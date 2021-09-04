import type { AppProps } from "next/app";

import "@fontsource/montserrat/latin-500.css"; // medium
import "@fontsource/montserrat/latin-600.css"; // semibold
import "@fontsource/montserrat/latin-700.css"; // bold
import "@fontsource/montserrat/latin-900.css"; // black

import "normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --color-bg: #fff;
          --color-bg2: #fff7e8;
          --color-text: #0a2925;
          --color-primary: #279989;
          --color-secondary: #74aa50;
          --color-border: rgba(0, 0, 0, 0.08);
        }
        html {
          font-size: 16px;
        }
        body {
          font-family: Montserrat, Verdana, sans-serif;
          font-weight: 500;
          color: var(--color-text);
        }
        a {
          color: var(--color-primary);
        }
        a:not(:hover) {
          text-decoration: none;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
