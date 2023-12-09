module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
        tabWidth: 2,
      },
    ],
    'block-no-empty': true,
    'unit-allowed-list': [
      'em',
      'rem',
      'ch',
      'vh',
      'v',
      '%',
      'deg',
      'px',
      'vw',
      'fr',
      's',
      'ms',
    ],
    'no-descending-specificity': true,
    'color-no-invalid-hex': true,
    'font-family-no-missing-generic-family-keyword': true,
  },
};
