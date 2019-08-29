import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import SignUpForm from "./index";

storiesOf("signup", module).add("signup form", () => (
  <SignUpForm onSubmit={action("submit")} loading={false} />
));
