module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        "es6": true,
        "browser": true
    },
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    extends: 'eslint:recommended',
    ignorePatterns: ['node_modules'],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "no-template-curly-in-string": [
            "error"
        ],
        "block-scoped-var": [
            "error"
        ],
        "no-empty-function": [
            "error"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "key-spacing": [
            "error",
            {
                "mode": "minimum",
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "lines-between-class-members": [
            "error",
            "always"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-console": [
            "warn"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-unused-vars": [
            "error",
            {
                "ignoreRestSiblings": true
            }
        ],
        "one-var": [
            "error",
            "never"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-object-spread": [
            "error"
        ],
        "no-fallthrough": "off",
        "no-var": [
            "error"
        ],
        "object-shorthand": [
            "error"
        ],
        "prefer-destructuring": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ]
    }
}
