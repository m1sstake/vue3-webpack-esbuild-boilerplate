module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
        'plugin:json/recommended',
    ],
    ignorePatterns: ['!.eslintignore'],
    rules: {
        'vue/no-unused-vars': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'no-extra-semi': ['error'],
        quotes: ['error', 'single'],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: 1,
            },
        ],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/v-on-event-hyphenation': ['error', 'always'],
        'vue/multi-word-component-names': 0,
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'ignore', // ignore because conflicts with prettier
            },
        ],

        radix: ['error', 'always'],
        eqeqeq: 2,
        curly: 2,
        'no-debugger': [2],
        'no-console': 2,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                singleAttributePerLine: true,
            },
        ],
    },
};
