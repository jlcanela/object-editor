import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import { addObject } from './Store'
import { connect } from 'react-redux';

const Form = ({ onAdd }) =>
  <form>
    <h4>Create a new object</h4>
    <FormGroup
      controlId="formBasicText"
      validationState={''/*this.getValidationState()*/}
    >
      <ControlLabel>Name:</ControlLabel>
      <FormControl
        type="text"
        value={''/*this.state.value*/}
        placeholder="Enter text"
        //onChange={/*this.handleChange*/}
      />
      <FormControl.Feedback />
      <HelpBlock>Validation is based on string length.</HelpBlock>
      <ControlLabel>Description:</ControlLabel>
      <FormControl
        type="text"
        value={''/*this.state.value*/}
        placeholder="Enter text"
        //onChange={/*this.handleChange*/}
      />
      <FormControl.Feedback />
      <HelpBlock>Validation is based on string length.</HelpBlock>
      <Button onClick={ () => {
        onAdd(33);
      }
       }>Add</Button>
    </FormGroup>
  </form>

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (id) => {
      dispatch(addObject(id))
    }
  }
}

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form)

export default FormContainer;
