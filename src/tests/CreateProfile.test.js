import React from "react";
import { mount } from "enzyme";

import TestUtils from 'react-dom/test-utils';

import CreateProfile from "../components/CreateProfile";

describe("CreateProfile", () => {
  let props, createProfile;
  const createProfileFn = jest.fn();

  beforeEach(() => {
    props = {
      createProfile: createProfileFn
    };
    createProfile = mount(
      <CreateProfile {...props} />
    );
  });

  it("renders 8 divs", () => {
    const divs = createProfile.find("div");
    expect(divs.length).toEqual(8);
  });

  it("renders an h2", () => {
    const h2s = createProfile.find("h2");
    expect(h2s.length).toEqual(1);
  });

  it("renders a form", () => {
    const forms = createProfile.find("form");
    expect(forms.length).toEqual(1);
  });

  it("renders 2 labels", () => {
    const labels = createProfile.find("label");
    expect(labels.at(0).text()).toBe("Name");
    expect(labels.at(1).text()).toBe("Carrots");
    expect(labels.length).toEqual(2);
  });

  it("renders 2 inputs", () => {
    const inputs = createProfile.find("input");
    expect(inputs.length).toEqual(2);
  });

  it("renders a button", () => {
    const buttons = createProfile.find("button");
    expect(buttons.length).toEqual(1);
    expect(buttons.at(0).text()).toBe("Create");
  });

  describe("on form submit", () => {
    it("createProfile callback is not called when at least one field is empty", () => {
      createProfile.setState({name: "", carrots: ""});
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).not.toBeCalled();

      createProfile.setState({name: "Króliczek", carrots: ""});
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).not.toBeCalled();

      createProfile.setState({name: "", carrots: "30"});
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).not.toBeCalled();
    });

    it("createProfile callback is called correctly when the fields are filled", () => {
      createProfile.setState({name: "Króliczek", carrots: "30"});
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).toBeCalledWith({name: "Króliczek", carrots: 30});
    });
  });
});