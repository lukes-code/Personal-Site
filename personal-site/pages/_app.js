import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import NProgress from 'nprogress';
import styled, { createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import '../components/styles/nprogress.css';

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
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
