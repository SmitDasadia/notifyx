import React, { useState } from "react";
import axios from "axios";
import Tabs from "@/components/Tabs";
import NewsData from "@/components/NewsData";
import Head from 'next/head'

interface  healthProps {
  newsData: any;
}

const health: React.FC< healthProps> = ({ newsData }) => {
  return (
    <div className={`p-3`}>
      <Head>
        <title>NotifyX - Health</title>
      </Head>
      <NewsData newsData={newsData} />
    </div>
  );
};

export default health;

export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_NewsApi_Key;
  const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=health&pageSize=100`;

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
