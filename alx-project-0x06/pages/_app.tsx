import Layout from "../components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  )
}