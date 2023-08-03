import { useEffect, useState } from "react";
import axios from "axios";
import { useCountryContext } from "@/context/CountryContext";
import Head from "next/head";
import NewsData from "@/components/NewsData";

type NewsData = {
  newsData: any;
};

const Sports: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useCountryContext();

  const [newsData, setNewsData] = useState<NewsData>();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get("/api/news", {
          params: {
            country: selectedCountry,
            category: "sports", 
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
    <div className={`p-3 dark:bg-dark-bg dark:text-dark-text`}>
      <Head>
        <title>NotifyX - Sports</title>
      </Head>

      <NewsData newsData={newsData} />
    </div>
  );
};

export default Sports;
