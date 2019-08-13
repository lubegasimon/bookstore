import * as React from "react";
import { Button, Form, Input, FormField, Header } from "semantic-ui-react";

interface Credentials {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface Props {
  loading?: boolean;
  onSubmit: (input: Credentials) => void;
}

export default class SignUp extends React.Component<Props, Credentials> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  public handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public handleSubmit = async () => {
    await this.props.onSubmit({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  };

  public render() {
    return (
      <div>
        <Header as="h3" textAlign="center">
          Sign up for book store account
        </Header>
        <Form loading={this.props.loading} onSubmit={this.handleSubmit}>
          <FormField>
            <label>username</label>
            <Input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </FormField>
          <FormField>
            <label>email</label>
            <Input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </FormField>
          <FormField>
            <label>password</label>
            <Input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </FormField>
          <FormField>
            <label>confirmPassword</label>
            <Input
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleInput}
            />
          </FormField>
          <Button type="submit">SignUp</Button>
        </Form>
      </div>
    );
  }
}
