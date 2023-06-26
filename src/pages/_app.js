// pages/_app.js
import '@/styles/globals.css'
import { GlobalProvider } from '@/context/GlobalState';
import Contact from '@/components/contact/Contact';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Contact />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
