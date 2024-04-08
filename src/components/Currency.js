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
      if (item.country === event.target.value) {
        setcountryFrom(item.currency_code);
      }
    });
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
      " https://api.currencyapi.com/v3/latest?apikey=cur_live_3HwyOTkPTxuurLJgxuaRtDrLxtGDPKtoEcgA0Kuq&currencies=" +
      countryTo +
      "%2CUSD%2CCAD&base_currency=" +
      countryFrom;
    let p = fetch(apiUrl);

    p.then((res) => res.json()).then((value) => {
      let currencyValue = value["data"][countryTo]["value"];
      setconvertedValue(amount * currencyValue);
    });
  };

  return (
    <>
      <form>
        <div className="containter">
          <div className="amount">
            <label for="amount">Amount &nbsp;</label>
            <input type="number" onChange={handleSetAmount}></input>
          </div>
          <div className="from">
            <label for="from">From &nbsp;</label>
            <select onChange={handleSetFromCountry}>
              <option>Select Country Name</option>
              <Option />
            </select>
          </div>
          <div className="To">
            <label for="to">To &nbsp;</label>
            <select onChange={handleSetToCountry}>
              <option>Select Country Name</option>
              <Option />
            </select>
          </div>
        </div>
      </form>
      &nbsp; &nbsp;
      <button onClick={convert} type="button" className="btn btn-primary">
        Convert
      </button>
      <hr />
      <p>
        {amount}&nbsp;
        {countryFrom}
      </p>
      &darr;
      <p>
        {convertedValue}&nbsp;
        {countryTo}
      </p>
    </>
  );
}
