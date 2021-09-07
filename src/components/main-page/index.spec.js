import React from "react";
import { shallow, mount } from "enzyme";

import MainPage from "./index";
import * as api from "../../services/port-services";

describe("MainPage component testing", () => {
  it("snapshort testing", () => {
    const component = mount(<MainPage />);
    expect(component).toMatchSnapshot();
  });

  it("when data is return", () => {
    const mockGetData = jest
      .spyOn(api, "getPorts")
      .mockReturnValue(Promise.resolve([]));
    const component = shallow(<MainPage />);
  });
});
