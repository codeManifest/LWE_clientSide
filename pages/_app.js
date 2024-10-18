import "@/styles/globals.css";
import Nav from "./components/reuse/Nav";

export default function App({ Component, pageProps }) {
  return(
    <>
  <Nav/>
  <Component {...pageProps} />
    </>
  )
}
