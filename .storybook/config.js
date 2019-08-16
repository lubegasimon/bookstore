import { configure } from '@storybook/react';
import "../frontend/style/index.css";

const req = require.context('../frontend/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
