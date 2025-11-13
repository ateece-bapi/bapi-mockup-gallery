import type { AppProps } from 'next/app';
import Script from 'next/script';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/home-v1.css';
import '../styles/landing-v2.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load Tailwind Play CDN early so prototyping utilities are available before hydration to avoid FOUC */}
      <Script src='https://cdn.tailwindcss.com' strategy='beforeInteractive' />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
