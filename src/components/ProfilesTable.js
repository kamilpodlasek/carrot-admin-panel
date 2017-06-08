import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

import ProfileRow from './ProfileRow';
import Title from './styledComponents/Title';
import TableBig from './styledComponents/TableBig';
import ThFit from './styledComponents/ThFit';
import ThFitButtons from './styledComponents/ThFitButtons';

const ProfilesTable = props => {
  const { profiles } = props;
  const rows = profiles.map(profile =>
    <ProfileRow
      key={profile.id}
      profile={profile}
      deleteCarrots={props.deleteCarrots.bind(null, profile.id)}
      addCarrots={props.addCarrots.bind(null, profile.id)}
      deleteProfile={props.deleteProfile.bind(null, profile.id)}
    />
  );

  return (
    <Col sm={12} md={10} mdOffset={1}>
      <Title>Profiles:</Title>
      <TableBig condensed hover>
        <thead>
          <tr>
            <ThFit>ID</ThFit>
            <ThFit>Name</ThFit>
            <ThFit>Carrots</ThFit>
            <ThFitButtons></ThFitButtons>
            <ThFit></ThFit>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </TableBig>
    </Col>
  );
};

ProfilesTable.propTypes = {
  profiles: PropTypes.array.isRequired,
  deleteCarrots: PropTypes.func.isRequired,
  addCarrots: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired
};

export default ProfilesTable;