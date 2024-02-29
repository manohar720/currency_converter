import countryList from "../country.json";
import React from "react";

export default function Option() {
  return countryList.map(function (item, id) {
    return (
      <option key={id} value={item.country}>
        {item.country}
      </option>
    );
  });
}
