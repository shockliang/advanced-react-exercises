import React, {Component} from "react";
import {Form, Field} from 'react-final-form'

class Signup extends Component {
  onSubmit = () => {
    console.log("Signup form submitted")
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        {() => (
          <form>
            <fieldset>
              <label>Email</label>
              <Field name={"email"} type={"text"} component={"input"} autoComplete={"none"}/>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <Field name={"password"} type={"password"} component={"input"} autoComplete={"none"}/>
            </fieldset>
          </form>
        )}
      </Form>
    )
  }
}

export default Signup;