import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Headline } from ".";

storiesOf("Headline", module).add("basic example", () => (
  <div style={{ display: "inline-block" }}>
    <Headline compiler="ts-loader" framework="react" name="Ingo" />
  </div>
));
