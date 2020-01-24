import { configure } from "@storybook/react";

const req = require.context("../components", true, /.story.ts?x$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
