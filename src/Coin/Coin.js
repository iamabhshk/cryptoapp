import "./Coin.css";

const Coin = (props) => {
  const checkRedorGreenh1 = () => {
    if (props.h1 < 0) {
      return <p className="coindata_red">{props.h1}</p>;
    } else {
      return <p className="coindata_green">{props.h1}</p>;
    }
  };
  const checkRedorGreend7 = () => {
    if (props.d7 < 0) {
      return <p className="coindata_red">{props.d7}</p>;
    } else {
      return <p className="coindata_green">{props.d7}</p>;
    }
  };
  const checkRedorGreenh24 = () => {
    if (props.h24 < 0) {
      return <p className="coindata_red">{props.h24}</p>;
    } else {
      return <p className="coindata_green">{props.h24}</p>;
    }
  };
  return (
    <div className="coins">
      <div className="coin">
        <div className="coindata">
          <p className="coindata-title">Name</p>
          <p className="coindata-info">{props.name}</p>
        </div>
        <div className="coindata">
          <p className="coindata-title">Symbol</p>
          <p className="coindata-info">{props.symbol}</p>
        </div>
        <div className="coindata">
          <p className="coindata-title">Price(BTC)</p>
          <p className="coindata-info">{props.price_btc}</p>
        </div>
        <div className="coindata">
          <p className="coindata-title">Price</p>
          <p className="coindata-info">${props.price_usd}</p>
        </div>

        <div className="coindata">
          <p className="coindata-title">Market Cap</p>
          <p className="coindata-info">${props.market_cap}</p>
        </div>
        <div className="coindata">
          <p className="coindata-title">Percent change(1h)</p>
          {checkRedorGreenh1()}
        </div>
        <div className="coindata">
          <p className="coindata-title">Percent change(7d)</p>
          {checkRedorGreend7()}
        </div>
        <div className="coindata">
          <p className="coindata-title">Percent change(24h)</p>
          {checkRedorGreenh24()}
        </div>
      </div>
    </div>
  );
};

export default Coin;
