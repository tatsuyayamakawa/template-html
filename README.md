# テンプレートの使い方

## Gulpの環境構築

```$ npm install```

gulpfile.jsとpackage.jsonがある状態で上記コマンドを実行すると、
プラグインがインストールされ、以下コマンドが使えるようになる。

### 利用可能なGulpコマンド

```$ gulp```

gulpが起動。
ファイル保存で以下のタスクが自動で走るようになる。

- ブラウザのリロード
- sassのコンパイル
- css、jsのコード検証＆整形
- ejsのhtml化

```$ gulp imagemin```

./images/src/フォルダ内の画像を圧縮し./images/フォルダに吐き出す。
jpg、pngはWebP画像に変換される（jpg、pngより圧倒的に軽い）。

## CSSファイル構成

### baseディレクトリ

ベースとなるスタイルが定義されているSCSSファイルを格納します。

初期ファイル

- _base.scss （サイト共通の設定ファイル）
- _reset.scss （リセットする設定ファイル）

### mixinディレクトリ

mixinが定義されているSCSSファイルを格納します。

- _animation.scss （アニメーション系の設定ファイル）
- _btn.scss （ボタン系の設定ファイル）
- _font.scss （フォント系の設定ファイル）
- _over.scss （要素オーバー時の設定ファイル）

mixinルール

1. 別Blockで同じスタイルが必要になった場合、mixinを定義する。
1. 1つのmixinに対し、1つの定義ファイルを用意する。
1. mixinの定義ファイル名は、mixin名と同じにする。

### moduleディレクトリ

サイト共通で使用するモジュール別にスタイルが定義されているSCSSファイルを格納します。
**格納されるSCSSファイルは、BEM設計のBlock単位になります。**

- _header.scss
- _gnav.scss
- _main.scss
- _content.scss
- _snav.scss
- _side.scss
- _footer.scss
- _fnav.scss
- _share.scss

### pageディレクトリ

ページ単位で使用するスタイルが定義されているSCSSファイルを格納します。

### pluginsディレクトリ

外部プラグインのスタイルを格納しまvす。

### settingディレクトリ

初期設定で必要なパラメータなどが定義されているSCSSファイルを格納します。

- _variables.scss （変数の設定ファイル）
- _function.scss （関数の設定ファイル）
