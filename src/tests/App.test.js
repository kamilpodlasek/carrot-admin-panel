import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

import ConectedApp, { App } from "../containers/App";
import CreateProfile from "../components/CreateProfile";
import ProfilesTable from "../components/ProfilesTable";
import JumbotronTop from '../components/styledComponents/JumbotronTop';

describe("App", () => {
  let props, app;
  const createProfile = jest.fn();
  const deleteCarrots = jest.fn();
  const addCarrots = jest.fn();
  const deleteProfile = jest.fn();
  const removeError = jest.fn();

  beforeEach(() => {
    props = {
      profiles: [],
      actions: {
        createProfile,
        deleteCarrots,
        addCarrots,
        deleteProfile,
        removeError
      }
    };
    app = shallow(
      <App {...props} />
    );
  });

  it("renders a div", () => {
    const divs = app.find("div");
    expect(divs.length).toEqual(1);
  });

  it("renders JumbotronTop", () => {
    const JumbotronTops = app.find(JumbotronTop);
    expect(JumbotronTops.length).toEqual(1);
  });

  it("renders CreateProfile", () => {
    const createProfiles = app.find(CreateProfile);
    expect(createProfiles.length).toEqual(1);
  });

  it("renders ProfilesTable", () => {
    const ProfilesTables = app.find(ProfilesTable);
    expect(ProfilesTables.length).toEqual(1);
  });

  it('handles CreateProfile callbacks correctly', () => {
    app.find(CreateProfile).at(0).prop('createProfile')({name: "Króliczek", carrots: 30});
    expect(createProfile).toBeCalledWith({name: "Króliczek", carrots: 30});
  });

  it('handles ProfilesTable callbacks correctly', () => {
    app.find(ProfilesTable).at(0).prop('deleteCarrots')(1, 10);
    app.find(ProfilesTable).at(0).prop('addCarrots')(1, 20);
    app.find(ProfilesTable).at(0).prop('deleteProfile')(1);
    expect(deleteCarrots).toBeCalledWith(1, 10);
    expect(addCarrots).toBeCalledWith(1, 20);
    expect(deleteProfile).toBeCalledWith(1);
  });
});

describe("App with Redux", () => {
  let store, app;
  const mockStore = configureStore();
  const initialState = {
    profiles: {
      profiles: [
        { name: "Króliczek", carrots: 30 },
        { name: "Zaionc", carrots: 0 }
      ],
      error: null
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    app = mount(
      <Provider store={store}><ConectedApp /></Provider>
    );
  });

  it('renders the smart component', () => {
    expect(app.find(ConectedApp).length).toEqual(1);
  });

  it('props matches initialState', () => {
    expect(app.find(App).prop('profiles')).toEqual(initialState.profiles.profiles);
    expect(app.find(App).prop('error')).toEqual(initialState.profiles.error);
  });
});