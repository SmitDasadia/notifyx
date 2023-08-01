import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check if dark mode preference exists in local storage
    const darkModePreference = localStorage.getItem("darkMode");
    const root = document.documentElement;
    if (darkModePreference) {
      const isDarkMode = JSON.parse(darkModePreference);
      if (isDarkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, []);
  return (
    <>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
      
    </>
  );
}
