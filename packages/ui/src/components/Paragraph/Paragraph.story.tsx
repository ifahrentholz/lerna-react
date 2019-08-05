import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Paragraph } from ".";

storiesOf("Paragraph", module).add("basic example", () => (
  <Paragraph>Hello from Paragraph</Paragraph>
));
