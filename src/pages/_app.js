import Layout from "@/layout/layout";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [clientMode, setClientmode] = useState(false);

  useEffect(() => {
    setClientmode(true);
  }, []);

  if (!clientMode) {
    return null;
  }

  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
