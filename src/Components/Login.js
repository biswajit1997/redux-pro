import React from "react";
import { Col, Row, Label, Input, FormGroup, Button, Form } from "reactstrap";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  function handleValidSubmit(event, values) {
    dispatch({
      type: "LOGIN_USER",
      payload: values,
    });
  }
  return (
    <div>
      <div className="col-sm-6 offset-sm-3 mt-4">
        {/* <Form>
          <FormGroup>
            <h3>Login</h3>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" className="form-control" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" className="form-control" name="password" />
          </FormGroup>
          <FormGroup>
            <Button type="submit" className="btn btn-info">
              Submit
            </Button>
          </FormGroup>
        </Form> */}
        <AvForm
          className="needs-validation"
          onValidSubmit={(e, v) => {
            handleValidSubmit(e, v);
          }}
        >
          <FormGroup>
            <h3>Login</h3>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="validationCustom01">Email</Label>
            <AvField
              name="email"
              placeholder="Enter email"
              type="text"
              errorMessage="Enter email"
              className="form-control"
              validate={{ required: { value: true } }}
              id="validationCustom01"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="validationCustom02">Password</Label>
            <AvField
              name="password"
              placeholder="Enter password"
              type="text"
              errorMessage="Enter password"
              className="form-control"
              validate={{ required: { value: true } }}
              id="validationCustom02"
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </AvForm>
        <div>
          <p>{userData}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
