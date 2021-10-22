module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  ignoreFiles: [
    './build/css/style.css',
    './src/assets/css/foundation/_html5reset.css',
    './src/assets/css/foundation/_break-point.css',
    './src/assets/css/foundation/_variables.css',
  ],
  rules: {
    'no-empty-source': null,
    indentation: 2,
    'string-quotes': 'single',
    'block-no-empty': null,
    'function-url-quotes': 'always',
    // 'selector-list-comma-space-after': 'always',
    'value-list-comma-space-after': 'always-single-line',
    // 'function-comma-space-after': 'always',
    'no-descending-specificity': null,
    'declaration-colon-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    // https://stylelint.io/user-guide/rules/rule-empty-line-before#rule-empty-line-before
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before#first-nested
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignoreAtRules: ['import', 'mixin', 'include', 'define-mixin'],
      },
    ],
  },
}
