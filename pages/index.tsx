import axios from "axios";
import Head from 'next/head'
import HomePage from "@/src/HomePage";
import { useEffect, useState } from "react";
import { useCountryContext } from "@/context/CountryContext";
import NewsData from "@/components/NewsData";

interface NewsData {
  newsData: any;
}

const Home: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useCountryContext();

  const [newsData, setNewsData] = useState<NewsData>();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get("/api/TopHeadline", {
          params: {
            country: selectedCountry, // Pass the selected country as a query parameter
          },
        });
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, [selectedCountry]);

  

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

