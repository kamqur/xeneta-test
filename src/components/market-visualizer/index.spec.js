import React from "react";
import { shallow, mount } from "enzyme";

import MarketVisualizer from "./index";
import Graph from "./graph";
import * as api from "../../services/market-services";

describe("MarketVisualizer Componenet", () => {
  it("snapshort testing", () => {
    const component = mount(
      <MarketVisualizer
        loadingMarketData={[]}
        marketError={[]}
        marketData={[]}
        currentDestination={""}
        currentOrigin={""}
        dispatch={() => {}}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("marketdata is empty", () => {
    const component = shallow(
      <MarketVisualizer
        loadingMarketData={false}
        marketError={[]}
        marketData={[]}
        currentDestination={""}
        currentOrigin={""}
        dispatch={() => {}}
      />
    );

    const graph = component.find(Graph);
    expect(graph).toHaveLength(0);
  });

  it("marketdata is present", () => {
    const component = shallow(
      <MarketVisualizer
        loadingMarketData={false}
        marketError={[]}
        marketData={[1]}
        currentDestination={""}
        currentOrigin={""}
        dispatch={() => {}}
      />
    );

    const graph = component.find(Graph);
    expect(graph).toHaveLength(1);
  });

  it("currentOrigin/currentDestination is changed data fetch is called", () => {
    const mockGetData = jest
      .spyOn(api, "getMarketRates")
      .mockReturnValue(Promise.resolve([]));

    const component = mount(
      <MarketVisualizer
        loadingMarketData={false}
        marketError={[]}
        marketData={[]}
        currentDestination={""}
        currentOrigin={""}
        dispatch={() => {}}
      />
    );

    component.setProps({
      currentOrigin: { code: 1 },
      currentDestination: { code: 1 }
    });
  });

  it("currentOrigin/currentDestination is changed and data fails", () => {
    const mockGetData = jest
      .spyOn(api, "getMarketRates")
      .mockReturnValue(Promise.reject([]));

    const component = mount(
      <MarketVisualizer
        loadingMarketData={false}
        marketError={[]}
        marketData={[]}
        currentDestination={""}
        currentOrigin={""}
        dispatch={() => {}}
      />
    );

    component.setProps({
      currentOrigin: { code: 1 },
      currentDestination: { code: 1 }
    });
  });
});
