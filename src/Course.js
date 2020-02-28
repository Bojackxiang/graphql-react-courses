import React from "react";
// => step 4: import gql and other thing in different component...
import { gql } from "apollo-boost";
import CurrencyClient from "./Client";

const Course = () => {
  // => step 5: generate a function
  const retriveCurrency = () => {
    CurrencyClient.currencyClient.query({
      query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
      `,
    }).then(result => console.log(result))
  };

  // => step 6: run function to present the data
  retriveCurrency();

  return (
    <div>
      course component
      
    </div>
  );
};

export default Course;
