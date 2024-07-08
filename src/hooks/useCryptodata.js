import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
    },
    params: {
      vs_currency: "usd",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

export const useCryptoData = () => {
  return useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchData,
  });
};
