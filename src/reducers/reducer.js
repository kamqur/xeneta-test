import initialState from "../inital-state";
import {
  SET_DESTINATION,
  INITIATE_FETCH_PORT,
  FAILURE_FETCH_PORT,
  SUCESS_FETCH_PORT,
  RESET_STATE,
  SET_ORIGIN,
  INITIATE_FETCH_MARKET,
  SUCESS_FETCH_MARKET,
  FAILURE_FETCH_MARKET
} from "../actions";

const Reducer = (state, action) => {
  switch (action.type) {
    case INITIATE_FETCH_MARKET:
      return {
        ...state,
        loadingMarketData: true
      };

    case SUCESS_FETCH_MARKET:
      return {
        ...state,
        marketData: action.payload.marketData,
        loadingMarketData: false,
        marketError: []
      };

    case FAILURE_FETCH_MARKET:
      return {
        ...state,
        marketError: action.payload.marketError,
        loadingMarketData: false
      };

    case INITIATE_FETCH_PORT:
      return {
        ...state,
        loadingPort: true
      };
    case SUCESS_FETCH_PORT:
      return {
        ...state,
        ports: action.payload.ports,
        loadingPort: false
      };
    case FAILURE_FETCH_PORT:
      return {
        ...state,
        portErrors: action.payload.portErrors,
        loadingPort: false
      };

    case SET_DESTINATION:
      return {
        ...state,
        currentDestination: action.payload.currentDestination
      };

    case SET_ORIGIN:
      return {
        ...state,
        currentDestination: "",
        currentOrigin: action.payload.currentOrigin
      };

    case RESET_STATE:
      return initialState;

    default:
      throw new Error();
  }
};

export default Reducer;
