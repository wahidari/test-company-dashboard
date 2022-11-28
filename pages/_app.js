// import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    // <GlobalProvider>
    <ThemeProvider attribute="class" storageKey='theme'>
      <Component {...pageProps} />
    </ThemeProvider>
    // </GlobalProvider>
  )
}

export default MyApp