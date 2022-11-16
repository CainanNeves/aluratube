import { ColorModeContextProvider } from "../contexts/ColorModeContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeContextProvider>
      <Component {...pageProps} />
    </ColorModeContextProvider>
  );
}

export default MyApp;
