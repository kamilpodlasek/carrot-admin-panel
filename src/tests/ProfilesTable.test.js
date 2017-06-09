import React from "react";
import { mount } from "enzyme";
import Col from 'react-bootstrap/lib/Col';

import ProfilesTable from "../components/ProfilesTable";
import ProfileRow from "../components/ProfileRow";

describe("ProfilesTable", () => {
  let props, profilesTable;
  const deleteCarrots = jest.fn();
  const addCarrots = jest.fn();
  const deleteProfile = jest.fn();

  beforeEach(() => {
    props = {
      profiles: [{id: 1, name: "Królik", carrots: 0}, {id: 2, name: "Zaionc", carrots: 10}],
      deleteCarrots,
      addCarrots,
      deleteProfile
    };
    profilesTable = mount(
      <ProfilesTable {...props} />
    );
  });

  it("renders a Col", () => {
    const Cols = profilesTable.find(Col);
    expect(Cols.length).toEqual(1);
  });

  it("renders an h2", () => {
    const h2s = profilesTable.find("h2");
    expect(h2s.length).toEqual(1);
  });

  it("renders a table", () => {
    const tables = profilesTable.find("table");
    expect(tables.length).toEqual(1);
  });

  it("renders a thead", () => {
    const theads = profilesTable.find("thead");
    expect(theads.length).toEqual(1);
  });

  it("renders a tbody", () => {
    const tbodys = profilesTable.find("tbody");
    expect(tbodys.length).toEqual(1);
  });

  it("renders ths in thead tr", () => {
    const ths = profilesTable.find("th");
    expect(ths.length).toEqual(5);
    expect(ths.at(0).text()).toBe("ID");
    expect(ths.at(1).text()).toBe("Name");
    expect(ths.at(2).text()).toBe("Carrots");
    expect(ths.at(3).text()).toBe("");
    expect(ths.at(4).text()).toBe("");
  });

  it("renders correct amount of ProfileRows", () => {
    const ProfileRows = profilesTable.find(ProfileRow);
    expect(ProfileRows.length).toBe(props.profiles.length);
  });

  it('handles ProfileRows callbacks correctly with bindings', () => {
    profilesTable.find(ProfileRow).at(0).prop('deleteCarrots')(10);
    profilesTable.find(ProfileRow).at(0).prop('addCarrots')(20);
    profilesTable.find(ProfileRow).at(0).prop('deleteProfile')();
    expect(deleteCarrots).toBeCalledWith(1, 10);
    expect(addCarrots).toBeCalledWith(1, 20);
    expect(deleteProfile).toBeCalledWith(1);
  });
});