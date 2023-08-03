import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { country } = req.query; 
    const API_KEY = process.env.NEXT_PUBLIC_NewsApi_Key;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
