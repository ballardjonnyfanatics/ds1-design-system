import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs", // Add the docs addon
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;