const fs = require('fs');

// Load JSON files
const globalTokens = require('./global.json');
const semanticLight = require('./semantic-light.json');
const semanticDark = require('./semantic-dark.json');

// Helper to resolve nested references in tokens
const resolveReference = (ref, source) => {
  const path = ref.replace(/[{}]/g, '').split('.');
  let resolved = source;
  for (const segment of path) {
    if (!resolved[segment]) return null;
    resolved = resolved[segment];
  }
  return resolved.$value || resolved; // Return resolved value or object
};

// Convert semantic tokens to CSS variables
const generateCssVariables = (semanticTokens, globalTokens) => {
  let cssVariables = ':root {\n';

  const traverseTokens = (tokens, prefix = '') => {
    for (const key in tokens) {
      const token = tokens[key];
      if (typeof token === 'object' && '$value' in token) {
        let value = token.$value;

        // Resolve references
        if (value.startsWith('{')) {
          const resolvedValue = resolveReference(value, globalTokens);
          if (resolvedValue) value = resolvedValue;
        }

        // Add CSS variable
        const varName = `--${prefix}${key}`.toLowerCase().replace(/\./g, '-');
        cssVariables += `  ${varName}: ${value};\n`;
      } else if (typeof token === 'object') {
        traverseTokens(token, `${prefix}${key}.`);
      }
    }
  };

  traverseTokens(semanticTokens.DS1.color, 'color.');
  cssVariables += '}\n';
  return cssVariables;
};

// Generate CSS for light and dark themes
const lightThemeCss = generateCssVariables(semanticLight, globalTokens);
const darkThemeCss = generateCssVariables(semanticDark, globalTokens);

// Write output to CSS files
fs.writeFileSync('tokens-light.css', lightThemeCss, 'utf8');
fs.writeFileSync('tokens-dark.css', darkThemeCss, 'utf8');

console.log('CSS variables for light and dark themes generated successfully!');