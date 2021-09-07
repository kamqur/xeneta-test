import React, { useEffect } from "react";

import { getMarketRates } from "../../services/market-services";
import {
  INITIATE_FETCH_MARKET,
  SUCESS_FETCH_MARKET,
  FAILURE_FETCH_MARKET
} from "../../actions";
import Graph from "./graph";
import "./index.scss";

const MarketVisualizerClass = "Market-visualizer-class";

const MarketVisualizer = ({
  loadingMarketData,
  marketError,
  marketData,
  currentDestination,
  currentOrigin,
  dispatch
}) => {
  useEffect(() => {
    if (currentOrigin.code && currentDestination.code) {
      dispatch({ type: INITIATE_FETCH_MARKET });
      getMarketRates(currentOrigin.code, currentDestination.code)
        .then(res => {
          dispatch({
            type: SUCESS_FETCH_MARKET,
            payload: { marketData: res.data || [] }
          });
        })
        .catch(e =>
          dispatch({ type: FAILURE_FETCH_MARKET, payload: { marketError: e } })
        );
    }
  }, [currentOrigin, currentDestination,dispatch]);

  return loadingMarketData ? (
    <div className={`${MarketVisualizerClass}-loading`}>
      Loading market data
    </div>
  ) : marketData.length !== 0 ? (
    <Graph data={marketData} errors={marketError} />
  ) : (
    ""
  );
};

export default MarketVisualizer;
