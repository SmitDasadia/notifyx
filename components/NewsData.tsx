/* eslint-disable @next/next/no-img-element */
import React from "react";

interface NewsDataProps {
  newsData: any;
}

const NewsData: React.FC<NewsDataProps> = ({ newsData }) => {
  return (
    <>
      {newsData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {newsData.articles.map((article: any, index: number) => (
            <div
              key={index}
              className={`  rounded-md shadow-sm p-2 transition-colors duration-300 ease-in-out sm:border `}
            >
              <div className="flex flex-row sm:flex-col">

                <img src={ !article.urlToImage ? "https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?w=740&t=st=1690186682~exp=1690187282~hmac=18ae451724de2f68fef8eeeb76ac59b526c63aaa33409aa9652b8acd1040ede8" : article.urlToImage} alt={article.title} className="h-20 w-20 rounded-md sm:w-full sm:h-60 mr-5"/>
               
                  


               
                <div className="flex-1">
                  <h2 className=" text-xs sm:text-xl font-bold mb-2 pt-2">{article.title.slice()}</h2>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="flex justify-center items-center">Loading...</p>
      )}
    </>
  );
};

export default NewsData;

