import React,{useState} from "react";
import axios from "axios";
import Tabs from "@/components/Tabs";
import NewsData from "@/components/NewsData";
import Head from 'next/head'

interface scienceProps {
  newsData: any;
}

const science: React.FC<scienceProps> = ({ newsData }) => {

  

  return (
    <div className={`p-3 dark:bg-dark-bg dark:text-dark-text`}>
      <Head>
        <title>NotifyX - Science</title>
      </Head>
      
      <NewsData newsData={newsData} />
    </div>
  );
};

export default science;

export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_NewsApi_Key;
  const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=science&pageSize=100`;

  

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
