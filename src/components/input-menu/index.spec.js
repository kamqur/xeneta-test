import React from "react";
import { shallow } from "enzyme";

import InputMenu from "./index";

const InputMenuClass = "input-menu";

describe("Testing Input Menu Componenet", () => {
  it("snapshort testing", () => {
    const component = shallow(
      <InputMenu
        options={[{ code: "test", name: "test" }]}
        setValue={() => {}}
        label="test"
        currentValue=""
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("Add space", () => {
    const component = shallow(
      <InputMenu
        options={[{ code: "test", name: "test" }]}
        setValue={() => {}}
        label="test"
        currentValue=""
        space
      />
    );
    const spaceEl = component.find(`.${InputMenuClass}-space`);
    expect(spaceEl).toHaveLength(1);
  });

  it("No space is added", () => {
    const component = shallow(
      <InputMenu
        options={[{ code: "test", name: "test" }]}
        setValue={() => {}}
        label="test"
        currentValue=""
      />
    );
    const spaceEl = component.find(`.${InputMenuClass}-space`);
    expect(spaceEl).toHaveLength(0);
  });

  it("has select component", () => {
    const component = shallow(
      <InputMenu
        options={[{ code: "test", name: "test" }]}
        setValue={() => {}}
        label="test"
        currentValue=""
      />
    );
    const selectMenu = component.find(`.${InputMenuClass}-select-input`);
    expect(selectMenu).toHaveLength(1);
  });

  it("has no select component", () => {
    const component = shallow(
      <InputMenu setValue={() => {}} label="test" currentValue="" />
    );
    const selectMenu = component.find(`.${InputMenuClass}-select-input`);
    expect(selectMenu).toHaveLength(0);
  });

  it("setValue is called", () => {
    const onChange = jest.fn();

    const component = shallow(
      <InputMenu
        options={[{ code: "test", name: "test" }]}
        setValue={onChange}
        label="test"
        currentValue=""
      />
    );

    const selectMenu = component
      .find(`.${InputMenuClass}-select-input`)
      .simulate("change", { target: { code: "test", name: "test" } });
    expect(onChange).toHaveBeenCalled();
  });
});
