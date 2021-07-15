module.exports = {
  root : true,
  env : {
    es6: true,
    node: true,
  },
  extends : [
    "eslint:recommended",
    "google",
    "plugin:react/recommended",
  ],
  rules : {
    quotes: ["error", "double"],
    "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn",
  },
  "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }
};
