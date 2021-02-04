module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "react-native", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error",
    },
};
