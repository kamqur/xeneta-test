import axios from "axios";

const getPorts = () =>
  axios.get(
    `https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/ports`,
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_SECRET_KEY
      }
    }
  );

export { getPorts };
