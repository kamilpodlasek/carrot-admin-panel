import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

import TdCenter from './styledComponents/TdCenter';

const ProfileRow = ({profile, deleteCarrots, addCarrots, deleteProfile}) => (
  <tr>
    <td>{profile.id}</td>
    <td>{profile.name}</td> 
    <td>{profile.carrots}</td>
    <TdCenter>
      <ButtonGroup>
        <Button bsStyle="warning" onClick={() => deleteCarrots(50)}>-50</Button>
        <Button bsStyle="warning" onClick={() => deleteCarrots(20)}>-20</Button>
        <Button bsStyle="warning" onClick={() => deleteCarrots(10)}>-10</Button>
        <Button bsStyle="warning" onClick={() => deleteCarrots(5)}>-5</Button>
        <Button bsStyle="warning" onClick={() => deleteCarrots(2)}>-2</Button>
        <Button bsStyle="warning" onClick={() => deleteCarrots(1)}>-1</Button>
        <Button bsStyle="success" onClick={() => addCarrots(1)}>+1</Button>
        <Button bsStyle="success" onClick={() => addCarrots(2)}>+2</Button>
        <Button bsStyle="success" onClick={() => addCarrots(5)}>+5</Button>
        <Button bsStyle="success" onClick={() => addCarrots(10)}>+10</Button>
        <Button bsStyle="success" onClick={() => addCarrots(20)}>+20</Button>
        <Button bsStyle="success" onClick={() => addCarrots(50)}>+50</Button>
      </ButtonGroup>
    </TdCenter>
    <td>
      <Button bsStyle="danger" onClick={deleteProfile}><span className="glyphicon glyphicon-remove"></span></Button>
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