import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App component", () => {
  it("snapshort testing", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
