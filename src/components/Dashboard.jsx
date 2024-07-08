import React from "react";
import { useCryptoData } from "../hooks/useCryptodata";

const Dashboard = () => {
  const { data, error, isLoading } = useCryptoData();

  if (isLoading) return <>Loading</>;
  if (error) return <>{error.message}</>;
  console.log("data" + data);
  return (
    <div>
      <h1>Crypto Tracker</h1>
      <div className="grid grid-cols-4 gap-4 m-4">
        {data.map((coin) => (
          <div key={coin.id} className=" w-40 h-40 bg-slate-100 text-blue-400">
            <h2>{coin.name}</h2>
            <img src={coin.image} alt=""  className="w-24 mx-auto pt-1" />
            <p className=" font-bold text-sm text-blue-500">Current price : {coin.current_price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
