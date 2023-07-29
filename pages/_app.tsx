import DarkModeSwitch from "@/components/DarkModeSwitch";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <Header />
      <Tabs/>
      <Component {...pageProps} />
    </>
  );
}
