import React from "react";
import { mount } from "enzyme";

import ProfileRow from "../components/ProfileRow";

describe("ProfileRow", () => {
  let props, profileRow, buttons;
  const deleteCarrots = jest.fn();
  const addCarrots = jest.fn();
  const deleteProfile = jest.fn();

  beforeEach(() => {
    props = {
      profile: {id: 2, name: "Zaionc", carrots: 10},
      deleteCarrots,
      addCarrots,
      deleteProfile
    };
    profileRow = mount(
      <table><tbody><ProfileRow {...props} /></tbody></table>
    );
  });

  it("renders a tr", () => {
    const trs = profileRow.find("tr");
    expect(trs.length).toEqual(1);
  });

  it("renders 5 tds", () => {
    const tds = profileRow.find("td");
    expect(tds.length).toEqual(5);
  });

  it("renders text inside tds", () => {
    const tds = profileRow.find("td");
    expect(tds.at(0).text()).toBe(props.profile.id + "");
    expect(tds.at(1).text()).toBe(props.profile.name);
    expect(tds.at(2).text()).toBe(props.profile.carrots + "");
  });

  it("renders a div", () => {
    const divs = profileRow.find("div");
    expect(divs.length).toEqual(1);
  });

  describe("buttons", () => {
    it("renders 13 of them", () => {
      buttons = profileRow.find("button");
      expect(buttons.length).toEqual(13);
    });

    it("button 1 text and onClick is correct", () => {
      buttons.at(0).simulate("click");
      expect(deleteCarrots).toBeCalledWith(50);
      expect(buttons.at(0).text()).toBe("-50");
    });
    it("button 2 text and onClick is correct", () => {
      buttons.at(1).simulate("click");
      expect(deleteCarrots).toBeCalledWith(20);
      expect(buttons.at(1).text()).toBe("-20");
    });
    it("button 3 text and onClick is correct", () => {
      buttons.at(2).simulate("click");
      expect(deleteCarrots).toBeCalledWith(10);
      expect(buttons.at(2).text()).toBe("-10");
    });
    it("button 4 text and onClick is correct", () => {
      buttons.at(3).simulate("click");
      expect(deleteCarrots).toBeCalledWith(5);
      expect(buttons.at(3).text()).toBe("-5");
    });
    it("button 5 text and onClick is correct", () => {
      buttons.at(4).simulate("click");
      expect(deleteCarrots).toBeCalledWith(2);
      expect(buttons.at(4).text()).toBe("-2");
    });
    it("button 6 text and onClick is correct", () => {
      buttons.at(5).simulate("click");
      expect(deleteCarrots).toBeCalledWith(1);
      expect(buttons.at(5).text()).toBe("-1");
    });
    it("button 7 text and onClick is correct", () => {
      buttons.at(6).simulate("click");
      expect(addCarrots).toBeCalledWith(1);
      expect(buttons.at(6).text()).toBe("+1");
    });
    it("button 8 text and onClick is correct", () => {
      buttons.at(7).simulate("click");
      expect(addCarrots).toBeCalledWith(2);
      expect(buttons.at(7).text()).toBe("+2");
    });
    it("button 9 text and onClick is correct", () => {
      buttons.at(8).simulate("click");
      expect(addCarrots).toBeCalledWith(5);
      expect(buttons.at(8).text()).toBe("+5");
    });
    it("button 10 text and onClick is correct", () => {
      buttons.at(9).simulate("click");
      expect(addCarrots).toBeCalledWith(10);
      expect(buttons.at(9).text()).toBe("+10");
    });
    it("button 11 text and onClick is correct", () => {
      buttons.at(10).simulate("click");
      expect(addCarrots).toBeCalledWith(20);
      expect(buttons.at(10).text()).toBe("+20");
    });
    it("button 12 text and onClick is correct", () => {
      buttons.at(11).simulate("click");
      expect(addCarrots).toBeCalledWith(50);
      expect(buttons.at(11).text()).toBe("+50");
    });
    it("button 13 text and onClick is correct", () => {
      buttons.at(12).simulate("click");
      expect(deleteProfile).toBeCalled();
      const glyphicons = buttons.at(12).find(".glyphicon");
      expect(glyphicons.length).toEqual(1);
    });
  });
});