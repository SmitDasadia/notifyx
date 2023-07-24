import React,{useState} from "react";

import Tabs from "@/components/Tabs";
import NewsData from "@/components/NewsData";
import Head from 'next/head'

interface HomeProps {
  newsData: any;
}

const HomePage: React.FC<HomeProps> = ({ newsData }) => {

  

  return (
    <div className={`p-5 `}>
       <Head>
        <title>NotifyX </title>
      </Head>
      
      <NewsData newsData={newsData} />
    </div>
  );
};

export default HomePage;


