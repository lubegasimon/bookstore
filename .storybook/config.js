import { configure } from '@storybook/react';
import "../frontEnd/style/index.css";

const req = require.context('../frontEnd/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
