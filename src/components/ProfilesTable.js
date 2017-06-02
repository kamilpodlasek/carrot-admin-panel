import React from 'react';
import PropTypes from 'prop-types';

import ProfileRow from './ProfileRow';

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
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Carrots</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

ProfilesTable.propTypes = {
  profile: PropTypes.object,
  deleteCarrots: PropTypes.func.isRequired,
  addCarrots: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired
};

export default ProfilesTable;