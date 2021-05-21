import React, {Component} from "react";
import {Form, Field} from 'react-final-form'

class Signup extends Component {
  onSubmit = (formProps) => {
    console.log("Signup form submitted", formProps)
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        {({handleSubmit, pristine, reset, submitting}) => (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Email</label>
              <Field name={"email"} type={"text"} component={"input"} autoComplete={"none"}/>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <Field name={"password"} type={"password"} component={"input"} autoComplete={"none"}/>
            </fieldset>
            <button>Sign up</button>
          </form>
        )}
      </Form>
    )
  }
}

export default Signup;