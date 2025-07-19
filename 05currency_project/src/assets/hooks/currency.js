// import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const url = `https://api.currencylayer.com/live?access_key=YOUR_ACCESS_KEY&source=${currency}`;
    
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("Full API response:", res);     // 🔍 Check the full response
  //       setData(res.rates);                         // ✅ Only set if rates exist
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch exchange rates:", err);
  //       setData({});
  //     });
  // }, [currency]);

    const exchangeRates = {
 USD: { PKR: 278.25, EUR: 0.91, INR: 83.4, GBP: 0.79, AUD: 1.5, CAD: 1.36 },
    PKR: { USD: 0.0036, EUR: 0.0033, INR: 0.3, GBP: 0.0028, AUD: 0.0054, CAD: 0.0049 },
    EUR: { USD: 1.1, PKR: 305.5, INR: 90.2, GBP: 0.86, AUD: 1.64, CAD: 1.49 },
    INR: { USD: 0.012, PKR: 3.5, EUR: 0.011, GBP: 0.0095, AUD: 0.018, CAD: 0.017 },
    GBP: { USD: 1.26, PKR: 350.5, EUR: 1.17, INR: 105.2, AUD: 1.91, CAD: 1.73 },
    AUD: { USD: 0.67, PKR: 183.5, EUR: 0.61, INR: 56.1, GBP: 0.52, CAD: 0.91 },
    CAD: { USD: 0.74, PKR: 200.2, EUR: 0.67, INR: 62.4, GBP: 0.58, AUD: 1.1 }
  };

  return {rates: exchangeRates[currency] || {},
   allCurrencies: Object.keys(exchangeRates)
  }

}

export default useCurrencyInfo;
