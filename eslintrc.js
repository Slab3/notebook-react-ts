module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'camelcase': 'off',
    'max-len': ['error', { code: 120 }],
    'no-bitwise': 'off',
    'import/namespace': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
      },
    ],
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    // 'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    "react/jsx-props-no-spreading": "off",
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 10
      }
    ],
    'react/no-unused-prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    "no-use-before-define": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/no-named-as-default": 0,
    // 'global-require': 'off',
    // '@typescript-eslint/no-unsafe-assignment': "off",
    // 'import/prefer-default-export': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/accessible-emoji': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'react/no-unescaped-entities': 'off'
  }
};
