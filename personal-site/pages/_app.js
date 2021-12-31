import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import NProgress from 'nprogress';
import styled, { createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import Nav from '../components/Nav'
import '../components/styles/nprogress.css';
import Script from 'next/script'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyles = createGlobalStyle`
  html {
    --black: #101010;
    --red: #B72929;
    --grey: #ADADAD;
    --gray: var(--grey);
    font-size: 18px;
  }
`;

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Lukescode</title>
        <meta name="description" content="A website for Lukescode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `
        }
      </Script>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
