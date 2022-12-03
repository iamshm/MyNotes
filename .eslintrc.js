module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                quotes: "off",
                "@typescript-eslint/quotes": "warn",
                "@typescript-eslint/no-shadow": ["error"],
                "no-shadow": "off",
                "no-undef": "off",
                "react/prop-types": "off",
                "react/react-in-jsx-scope": "off",
                "react-hooks/exhaustive-deps": "warn",
                "no-unused-vars": "warn",
            },
        },
    ],
};
