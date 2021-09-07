import axios from "axios";

const getMarketRates = (origin, destination) =>
  axios.get(
    `https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/rates?origin=${origin}&destination=${destination}`,
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_SECRET_KEY
      }
    }
  );

export { getMarketRates };
