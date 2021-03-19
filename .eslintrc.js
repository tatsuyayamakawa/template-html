module.exports = {
  extends: ['wordpress', 'plugin:prettier/recommended'], // WordPressのコーディング規約をベースにする
  plugins: ['react'], // React関係のルールを指定するのに必要
  parser: 'babel-eslint', // babel-eslint をパーサーに指定（JSX とかでエラー出るのを回避）
  parserOptions: {
    ecmaVersion: 6, // ES2015(ES6) の構文はここに集約
    sourceType: 'module', // import などを使うときに必要
    ecmaFeatures: {
      experimentalObjectRestSpread: true, // 非推奨警告を表示
      jsx: true, // JSX を使うときに必要
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-var': 'error', // varを許可しない
    'no-console': 'off', // console.logがあってもエラーにしない
    camelcase: ['warn', { properties: 'never' }], // オブジェクトのキーはキャメルじゃなくてよい
    'react/jsx-uses-vars': 1, // これを使うとJSXで使ってる変数がno-useとして認識されるのを防げた
  },
};
