const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    // Stop ESLint from looking for a configuration file in parent folders
    'root': true,
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    // "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "no-for-of-loops",
        "babel"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        'accessor-pairs': OFF,
        // 'brace-style': [ERROR, '1tbs'],
        // 'comma-dangle': [ERROR, 'always-multiline'],
        'consistent-return': OFF,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eol-last': ERROR,
        // 'eqeqeq': [ERROR, 'allow-null'],
        'indent': OFF,
        'jsx-quotes': [ERROR, 'prefer-double'],
        'keyword-spacing': [ERROR, { after: true, before: true }],
        'no-bitwise': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-shadow': WARN,
        'no-unused-expressions': WARN,
        'no-unused-vars': [WARN, { args: 'none' }],
        'no-useless-concat': OFF,
        // 'quotes': [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'space-before-blocks': ERROR,
        'space-before-function-paren': OFF,

        // React & JSX
        // Our transforms set this automatically
        // 'react/jsx-boolean-value': [ERROR, 'always'],
        "react/jsx-uses-react": WARN,
        "react/no-this-in-sfc": WARN,
        "react/no-unescaped-entities": WARN,
        "react/no-unknown-property": WARN,
        "react/no-unused-state": WARN,
        "react/style-prop-object": ERROR,
        "react/void-dom-elements-no-children": ERROR,
        "react/jsx-uses-vars": WARN,
        "react/no-string-refs": ERROR,
        'react/jsx-no-undef': ERROR,
        "react/jsx-closing-tag-location": WARN,
        "react/jsx-equals-spacing": [ERROR, "never"],
        "react/jsx-no-duplicate-props": ERROR,
        "react/jsx-pascal-case": WARN,
        "react/jsx-props-no-multi-spaces": WARN,
        "react/jsx-wrap-multilines": ERROR,
        // We don't care to do this
        'react/jsx-sort-prop-types': OFF,
        'react/jsx-space-before-closing': ERROR,
        'react/jsx-uses-react': ERROR,
        'react/no-is-mounted': OFF,
        // This isn't useful in our test code
        'react/react-in-jsx-scope': ERROR,
        'react/self-closing-comp': WARN,
        // We don't care to do this
        'react/jsx-wrap-multilines': [ERROR, { declaration: false, assignment: false }]

    },
    "globals": {

    }
};