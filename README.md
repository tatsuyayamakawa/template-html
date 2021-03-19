# テンプレートの使い方

## リポジトリのclone

```bash
git clone git@github.com:tatsuyayamakawa/template-html.git
```

## リポジトリの作成

1. Github上でリポジトリを作成。
1. ターミナルで下記コマンドを実行。

```bash
git remote add origin <GitHubで作成したリポジトリのURL>
```

## Gulpの環境構築

gulpfile.jsとpackage.jsonがある状態で下記コマンドを実行。

```bash
npm install
```

プラグインがインストールされ、下記コマンドが使えるようになる。

### 利用可能なGulpコマンド

```bash
gulp
```

gulpが起動。
ファイル保存で以下のタスクが自動で走るようになる。

- ブラウザのリロード
- sassのコンパイル
- css、jsのコード検証＆整形
- ejsのhtml化

```bash
gulp imagemin
```

./images/src/フォルダ内の画像を圧縮し./images/フォルダに吐き出す。
jpg、pngはWebP画像に変換される（jpg、pngより圧倒的に軽い）。

## CSSファイル構成

SassはBEM記法を採用しています。

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
