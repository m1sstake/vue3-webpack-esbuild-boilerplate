module.exports = {
    extends: [
        'stylelint-config-recommended-vue',
    ],
    plugins: ['stylelint-order'],
    ignoreFiles: ['node_modules/**', './src/assets/styles/reset.css'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            { ignoreAtRules: ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for'] },
        ],
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-order': ['width', 'height'],
    },
}