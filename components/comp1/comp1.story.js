import React from "react";
import { storiesOf } from "@storybook/react";

import { Add } from "./comp1";

storiesOf("Add", module).add("default", () => <Add a={1} b={2} />);
