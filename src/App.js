import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin/Coin";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coinlore.net/api/tickers/?start=0&limit=50")
      .then((response) => {
        setCryptoList(response.data["data"]);
      });
  });

  return (
    <div className="App">
      <h1 className="App-title">CryptoLand</h1>
      {cryptoList.map((coin) => {
        return (
          <Coin
            name={coin.name}
            symbol={coin.symbol}
            price_usd={coin.price_usd}
            price_btc={coin.price_btc}
            market_cap={coin.market_cap_usd}
            h1={coin.percent_change_1h}
            d7={coin.percent_change_7d}
            h24={coin.percent_change_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
