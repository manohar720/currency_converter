import axios from "axios";
import countryList from "../country.json";
import Option from "./Option";

import { useState } from "react";

export default function CurrencyApi() {
  const [amount, setamount] = useState("");
  const [countryFrom, setcountryFrom] = useState("");
  const [countryTo, setcountryTo] = useState("");
  const [convertedValue, setconvertedValue] = useState("");

  const handleSetAmount = (event) => {
    setamount(event.target.value);
  };

  const handleSetFromCountry = (event) => {
    countryList.map((item) => {
      if (item.country == event.target.value) {
        setcountryFrom(item.currency_code);
      }
    });
    // if (event.target.value == countryList.country) {
    //   console.log(countryList.country_code);
    // }

    //setcountryFrom(event.target.value);
  };
  const handleSetToCountry = (event) => {
    countryList.map((item) => {
      if (item.country === event.target.value) {
        setcountryTo(item.currency_code);
      }
    });
  };
  const convert = function () {
    let apiUrl =
      "http://api.currencyapi.com/v3/latest?apikey=cur_live_SPY8tOLhFTHaKKdrIx6fTvsTH6fJI0ksUuZECdGQ&currencies=" +
      countryTo +
      "%2CUSD%2CCAD&base_currency=" +
      countryFrom;

    axios.get(apiUrl).then((res) => {
      let currencyValue = res["data"]["data"][countryTo]["value"];
      setconvertedValue(amount * currencyValue);
    });
    console.log(amount);
  };

  return (
    <>
      <form>
        <div className="amount">
          <label for="amount">Amount &nbsp;</label>
          <input type="number" onChange={handleSetAmount}></input>
        </div>
        <div className="from">
          <label for="from">From &nbsp;</label>
          <select onChange={handleSetFromCountry}>
            <Option />
          </select>
        </div>
        <div className="To">
          <label for="to">To &nbsp;</label>
          <select onChange={handleSetToCountry}>
            <Option />
          </select>
        </div>
      </form>
      &nbsp; &nbsp;<button onClick={convert}>convert</button>
      <hr />
      <p>{countryFrom}</p>
      &darr;
      <p>{countryTo}</p>
      <p>{convertedValue}</p>
    </>
  );
}
