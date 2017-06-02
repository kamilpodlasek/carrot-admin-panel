import React from 'react';
import PropTypes from 'prop-types';

const ProfileRow = ({profile, deleteCarrots, addCarrots, deleteProfile}) => (
  <tr>
    <td>{profile.id}</td>
    <td>{profile.name}</td> 
    <td>{profile.carrots}</td>
    <td>
      <button onClick={() => deleteCarrots(50)}>-50</button>
      <button onClick={() => deleteCarrots(20)}>-20</button>
      <button onClick={() => deleteCarrots(10)}>-10</button>
      <button onClick={() => deleteCarrots(5)}>-5</button>
      <button onClick={() => deleteCarrots(2)}>-2</button>
      <button onClick={() => deleteCarrots(1)}>-1</button>
      <button onClick={() => addCarrots(1)}>+1</button>
      <button onClick={() => addCarrots(2)}>+2</button>
      <button onClick={() => addCarrots(5)}>+5</button>
      <button onClick={() => addCarrots(10)}>+10</button>
      <button onClick={() => addCarrots(20)}>+20</button>
      <button onClick={() => addCarrots(50)}>+50</button>
      <button onClick={deleteProfile}>Delete profile</button>
    </td>
  </tr>
);

ProfileRow.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteCarrots: PropTypes.func.isRequired,
  addCarrots: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired
};

export default ProfileRow;