import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  if (!Component) {
    throw new Error("Missing Component prop in App");
  }

  if (!pageProps) {
    throw new Error("Missing pageProps prop in App");
  }

  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
