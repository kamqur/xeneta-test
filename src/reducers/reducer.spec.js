import reducer from "./reducer";
import initiateState from "../inital-state";
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

describe("Testing Reducer functions", () => {
  it("Testing initial reset State", () => {
    const state = reducer(initiateState, { type: RESET_STATE });
    expect(state).toEqual(initiateState);
  });

  it("Testing sucess fetch market", () => {
    const state = reducer(initiateState, {
      type: SUCESS_FETCH_MARKET,
      payload: { marketData: 1 }
    });
    expect(state).toEqual({
      ...initiateState,
      marketData: 1,
      loadingMarketData: false,
      marketError: []
    });
  });

  it("Testing failure fetch market", () => {
    const state = reducer(initiateState, {
      type: FAILURE_FETCH_MARKET,
      payload: { marketError: "Error: Network Error" }
    });
    expect(state).toEqual({
      ...initiateState,
      marketError: "Error: Network Error",
      loadingMarketData: false
    });
  });

  it("Testing initiate fetch port", () => {
    const state = reducer(initiateState, {
      type: INITIATE_FETCH_PORT,
      payload: { loadingPort: true }
    });
    expect(state).toEqual({
      ...initiateState,
      loadingPort: true
    });
  });

  it("Testing success fetch port", () => {
    const state = reducer(initiateState, {
      type: SUCESS_FETCH_PORT,
      payload: {
        ports: [
          { code: "NOOSL", name: "Oslo" },
          { code: "CNSGH", name: "Shanghai" },
          { code: "CNSTG", name: "Shantou" },
          { code: "NLRTM", name: "Rotterdam" },
          { code: "DEHAM", name: "Hamburg" },
          { code: "GBFXT", name: "Felixstowe" },
          { code: "USNYC", name: "New York" }
        ]
      }
    });

    expect(state).toEqual({
      ...initiateState,
      ports: [
        { code: "NOOSL", name: "Oslo" },
        { code: "CNSGH", name: "Shanghai" },
        { code: "CNSTG", name: "Shantou" },
        { code: "NLRTM", name: "Rotterdam" },
        { code: "DEHAM", name: "Hamburg" },
        { code: "GBFXT", name: "Felixstowe" },
        { code: "USNYC", name: "New York" }
      ],
      loadingPort: false
    });
  });

  it("Testing failure fetch port", () => {
    const state = reducer(initiateState, {
      type: FAILURE_FETCH_PORT,
      payload: { portErrors: "Error: Network Error" }
    });
    expect(state).toEqual({
      ...initiateState,
      portErrors: "Error: Network Error",
      loadingPort: false
    });
  });

  it("Testing destintion setting", () => {
    const state = reducer(initiateState, {
      type: SET_DESTINATION,
      payload: { currentDestination: { code: "CNSGH", name: "Shanghai" } }
    });
    expect(state).toEqual({
      ...initiateState,
      currentDestination: { code: "CNSGH", name: "Shanghai" }
    });
  });

  it("Testing origin setting", () => {
    const state = reducer(initiateState, {
      type: SET_ORIGIN,
      payload: { currentOrigin: { code: "CNSGH", name: "Shanghai" } }
    });
    expect(state).toEqual({
      ...initiateState,
      currentOrigin: { code: "CNSGH", name: "Shanghai" }
    });
  });
});
