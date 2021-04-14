import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux";

import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
