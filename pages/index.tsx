import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });



import Head from 'next/head'
import HomePage from "@/src/HomePage";

interface HomeProps {
  newsData: any;
}

const Home: React.FC<HomeProps> = ({ newsData }) => {

  

  return (
    <div className={` dark:bg-dark-bg dark:text-dark-text`}>
       <Head>
        <title>NotifyX </title>
      </Head>

      <HomePage newsData={newsData}/>
      
     
    </div>
  );
};

export default Home;


export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_NewsApi_Key;
  const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

  

  try {
    // Fetch news data from the API
    const response = await axios.get(API_ENDPOINT);
    const newsData = response.data;

    // Return the fetched data as props
    return {
      props: {
        newsData,
      },
    };
  } catch (error) {
    console.error("Error fetching news data:", error);

    // If there's an error, still return an empty newsData prop so the component can handle it gracefully
    return {
      props: {
        newsData: null,
      },
    };
  }
}