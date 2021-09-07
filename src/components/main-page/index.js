import React, { useEffect, useReducer } from "react";

import { getPorts } from "../../services/port-services";
import initialState from "../../inital-state";
import {Reducer } from "../../reducers";
import {
  SET_ORIGIN,
  SET_DESTINATION,
  INITIATE_FETCH_PORT,
  SUCESS_FETCH_PORT,
} from "../../actions";
import InputMenu from "../input-menu";
import MarketVisualizer from "../market-visualizer";
import "./index.scss";

const MainPageClass = "main-page";

function MainPage() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const {
    currentDestination,
    currentOrigin,
    ports,
    loadingPort
  } = state;
  useEffect(() => {
    dispatch({ type: INITIATE_FETCH_PORT });
    getPorts()
      .then(res => {
        dispatch({
          type: SUCESS_FETCH_PORT,
          payload: { ports: res.data || [] }
        });
      })
      .catch(e =>
        dispatch({ type: "FAILURE_FETCH_PORT", payload: { portErrros: e } })
      );
  }, []);

  return (
    <div className="App">
      {loadingPort ? (
        <div> Loading ports ... </div>
      ) : (
        <div className={MainPageClass}>
          <div className={`${MainPageClass}-input-container`}>
            <InputMenu
              options={ports}
              label={"Origin"}
              currentValue={currentOrigin.name || ""}
              setValue={e =>
                dispatch({
                  type: SET_ORIGIN,
                  payload: { currentOrigin: e.value }
                })
              }
              space
            />

            <InputMenu
              options={ports}
              label={"Destination"}
              currentValue={currentDestination.name || ""}
              setValue={e =>
                dispatch({
                  type: SET_DESTINATION,
                  payload: { currentDestination: e.value }
                })
              }
            />
          </div>
          <MarketVisualizer {...state} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
