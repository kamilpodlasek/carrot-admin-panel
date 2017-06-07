import React from 'react';
import PropTypes from 'prop-types';

const CreateProfile = ({createProfile}) => {
  let nameNode, carrotsNode;

  const handleSubmit = function(e) {
    e.preventDefault();

    const name = nameNode.value;
    const carrots = parseInt(carrotsNode.value, 10);

    if(name && carrots) {
      createProfile({name, carrots});
    }
  }

  return (
    <div>
      <h2>Add profile:</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Name:
          <input type="text" name="name" ref={node => nameNode = node} />
        </p>
        <p>
          Carrots:
          <input type="number" name="carrots" ref={node => carrotsNode = node}  />
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default CreateProfile;