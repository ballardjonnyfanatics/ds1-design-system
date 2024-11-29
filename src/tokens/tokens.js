// src/tokens/tokens.js
import globalTokens from './global.json';
import semanticLightTokens from './semantic-light.json';
import semanticDarkTokens from './semantic-dark.json';

// Resolve the references (e.g., global token names) in semantic tokens
export const resolveTokens = (semanticTokens) => {
  const resolvedTokens = {};

  Object.keys(semanticTokens).forEach((key) => {
    if (typeof semanticTokens[key] === 'object') {
      // If the value is an object (like button), resolve recursively
      resolvedTokens[key] = resolveTokens(semanticTokens[key]);
    } else {
      // Resolve the reference from global tokens
      resolvedTokens[key] = globalTokens[semanticTokens[key]] || semanticTokens[key];
    }
  });

  return resolvedTokens;
};

// Export the tokens
export const tokens = {
  global: globalTokens,
  light: resolveTokens(semanticLightTokens),
  dark: resolveTokens(semanticDarkTokens),
};