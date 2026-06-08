import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${mono.variable}`}>
      <Head>
        <title>Sean Slicer — Software Engineer</title>
        <meta
          name="description"
          content="Sean Slicer is a software engineer in Kansas City building full-stack products and the data systems behind them, with a focus on AI-assisted development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06070a" />
        <meta property="og:title" content="Sean Slicer — Software Engineer" key="title" />
        <meta
          property="og:description"
          content="Full-stack software engineer building products and data systems with AI-assisted, agentic workflows."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
