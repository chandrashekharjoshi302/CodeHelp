import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
