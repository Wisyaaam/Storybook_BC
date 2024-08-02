import type { Preview } from "@storybook/react";
import '../styles/global.css';
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs:{
      theme: themes.dark
    },
  },
};

export default preview;
