import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

import TdCenter from './styledComponents/TdCenter';
import ButtonSubtract from './styledComponents/ButtonSubtract';
import ButtonAdd from './styledComponents/ButtonAdd';
import ButtonDelete from './styledComponents/ButtonDelete';

const ProfileRow = ({profile, deleteCarrots, addCarrots, deleteProfile}) => (
  <tr>
    <td>{profile.id}</td>
    <td>{profile.name}</td> 
    <td>{profile.carrots}</td>
    <TdCenter>
      <ButtonGroup>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(50)}>50</ButtonSubtract>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(20)}>20</ButtonSubtract>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(10)}>10</ButtonSubtract>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(5)}>5</ButtonSubtract>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(2)}>2</ButtonSubtract>
        <ButtonSubtract bsStyle="warning" bsSize="small" onClick={() => deleteCarrots(1)}>1</ButtonSubtract>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(1)}>1</ButtonAdd>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(2)}>2</ButtonAdd>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(5)}>5</ButtonAdd>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(10)}>10</ButtonAdd>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(20)}>20</ButtonAdd>
        <ButtonAdd bsStyle="success" bsSize="small" onClick={() => addCarrots(50)}>50</ButtonAdd>
      </ButtonGroup>
    </TdCenter>
    <td>
      <ButtonDelete bsStyle="danger" bsSize="small" onClick={deleteProfile}><span className="glyphicon glyphicon-remove"></span></ButtonDelete>
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