import React, { Component } from 'react';
import { Button, FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

class Form extends Component {

/*  getInitialState() {
    return {
      value: ''
    };
  }*/

/*  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }*/

/*  handleChange(e) {
    this.setState({ value: e.target.value });
  }*/

  render() {
    return (
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
          <Button>Add</Button>
        </FormGroup>
      </form>
    );
  }
}

export default Form;
