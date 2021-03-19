module.exports = {
	plugins: ['stylelint-scss'], // stylelint-scss を使う
  extends: [
		'stylelint-config-wordpress',
    'stylelint-prettier/recommended',
  ],
	// .prettierrc.jsの内容を上書きしたい時は rules から可能
  rules: {
		'max-line-length': null, // max文字数を無視
    'function-url-quotes': 'never', // 不必要なクォーテーションを禁止( 自動Fixできないので注意 )
    'no-descending-specificity': null, // セレクタの詳細度に関する警告を出さない
    'font-weight-notation': null, // font-weightの指定は自由に
		'at-rule-no-unknown': null, // scssで使える @include などにエラーがでないようにする
    'scss/at-rule-no-unknown': true, // scssでもサポートしていない @ルール にはエラーを出す
  }
};