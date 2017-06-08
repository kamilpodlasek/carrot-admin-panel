import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
//import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

import Title from './styledComponents/Title';

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      carrots: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.state.name;
    const carrots = parseInt(this.state.carrots, 10);

    if(name && carrots >= 0) {
      this.props.createProfile({name, carrots});
      this.setState({
        name: "",
        carrots: ""
      });
    } else {
      //nameValidationState = name ? "" : "error";
      //carrotsValidationState = carrots ? "" : "error";
    }
  }

  render() {
    //let nameValidationState,
    //    carrotsValidationState;

    //validationState={nameValidationState}

    return (
      <Col sm={12} md={6} mdOffset={3}>
        <Title>Create a new profile:</Title>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              {
                //(nameValidationState === "error") ? <HelpBlock>This field is required.</HelpBlock> : ""
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="formCarrots">
            <Col componentClass={ControlLabel} sm={2}>
              Carrots
            </Col>
            <Col sm={10}>
              <FormControl type="number" name="carrots" value={this.state.carrots} onChange={this.handleChange} />
              {
                //(carrotsValidationState === "error") ? <HelpBlock>This field is required.</HelpBlock> : ""
              }
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Create
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default CreateProfile;