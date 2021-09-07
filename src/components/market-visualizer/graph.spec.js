import React from "react";
import { shallow } from "enzyme";
import ReactEcharts from "echarts-for-react";

import Graph from "./graph";

describe("Testing Graph Componenet", () => {
  it("snapshort testing", () => {
    const component = shallow(
      <Graph
        data={[
          {
            day: "day",
            mean: 1,
            low: 1,
            high: 1
          }
        ]}
        errors={[]}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("data is not passed", () => {
    const component = shallow(<Graph errors={[]} />);
  });

  it("there are errors", () => {
    const component = shallow(
      <Graph
        errors={{
          message: "error"
        }}
      />
    );
    const errors = component.find(".errors");
    expect(errors).toHaveLength(1);
  });

  it("Chart will be rendered", () => {
    const component = shallow(
      <Graph
        data={[
          {
            day: "day1",
            mean: 1,
            low: 1,
            high: 1
          },
          {
            day: "day2",
            mean: 1,
            low: 1,
            high: 1
          }
        ]}
        errors={[]}
      />
    );

    const chart = component.find(ReactEcharts);
    expect(chart).toHaveLength(1);
  });

  it("Chart will be rendered", () => {
    const component = shallow(
      <Graph
        data={[
          {
            day: "day1",
            mean: 1,
            low: 1,
            high: 1
          },
          {
            day: "day2",
            mean: 1,
            low: 1,
            high: 1
          }
        ]}
        errors={[]}
      />
    );

    const chart = component.find(ReactEcharts);
    expect(chart).toHaveLength(1);
  });

  it("Chart will be rendered", () => {
    const component = shallow(
      <Graph
        data={[
          {
            day: "day1",
            mean: 1,
            low: 1,
            high: 1
          },
          {
            day: "day1",
            mean: 1,
            low: 1,
            high: 1
          }
        ]}
        errors={[]}
      />
    );

    const chart = component.find(ReactEcharts);
    expect(chart).toHaveLength(1);
  });
});
