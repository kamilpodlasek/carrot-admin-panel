import React from "react";
import { mount } from "enzyme";

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

  it("renders a div", () => {
    const divs = createProfile.find("div");
    expect(divs.length).toEqual(1);
  });

  it("renders an h2", () => {
    const h2s = createProfile.find("h2");
    expect(h2s.length).toEqual(1);
  });

  it("renders a form", () => {
    const forms = createProfile.find("form");
    expect(forms.length).toEqual(1);
  });

  it("renders 2 ps", () => {
    const ps = createProfile.find("p");
    expect(ps.at(0).text()).toBe("Name:");
    expect(ps.at(1).text()).toBe("Carrots:");
    expect(ps.length).toEqual(2);
  });

  it("renders 3 inputs", () => {
    const inputs = createProfile.find("input");
    expect(inputs.length).toEqual(3);
  });

  describe("on form submit createProfile callback", () => {
    it("is not called when the fields are empty", () => {
      const inputs = createProfile.find("input");
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).not.toBeCalled();
    });

    it("is called correctly when the fields are filled", () => {
      const inputs = createProfile.find("input");
      inputs.at(0).node.value = "Króliczek";
      inputs.at(1).node.value = "30";
      createProfile.find('form').simulate('submit');
      expect(createProfileFn).toBeCalledWith({name: "Króliczek", carrots: 30});
    });
  });
});