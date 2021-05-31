# テンプレートの使い方

## １．リポジトリの clone

```bash
$ git clone git@github.com:tatsuyayamakawa/temp-wp.git
```

## ２．リポジトリの作成

GitHub 上でリモートリポジトリを作成します。
その後、ターミナルで下記コマンドを実行。

```bash
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

下記コマンドで接続構成を確認。

```bash
$ git remote -v
> origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
> origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

名前と URL が新しいものに変わっていれば OK。

以上の流れは以下も参照。

[Github に保存した HTML テンプレートを開発ごとに clone して複製利用したい](https://qiita.com/tatsuya_yamakawa/items/ee922540e591683c8ee4)

## ３．Gulp の環境構築

※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※
開発作業は src フォルダ内で行うこと。
本番ファイルは Gulp を通して dest フォルダに生成されます。
※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※

事前に[node.js](https://nodejs.org/ja/)をインストール。
最新版ではなく**推奨版にする**こと。

gulpfile.js と package.json があるか確認。
ターミナルで下記コマンドを実行します。

```bash
$ npm install
```

プラグインがインストールされます。

## ４．拡張機能のインストール

### 必須な拡張機能

-   [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja) - VS Code を日本語化する
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - ESLint を使うのに必要
-   [phpcbf（PHP Code Beautifier and Fixer）](https://marketplace.visualstudio.com/items?itemName=persoderlind.vscode-phpcbf) - PHP のコード整形
-   [phpcs（PHP Code Sniffer）](https://marketplace.visualstudio.com/items?itemName=shevaua.phpcs) - PHP のコードチェック
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - コードフォーマッター
-   [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus) - CSS の整形

### あると便利な拡張機能

-   [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - ペアとなるブラケットに色を付けてくれる
-   [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - Git のコミット履歴を確認できる（ショートカット：Alt + H）
-   [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) - コーディング時に CSS クラスを自動補完してくれる
-   [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - .md ファイルのプレビューを表示する（ショートカット：Ctrl + K → V）
-   [WordPress Snippet](https://marketplace.visualstudio.com/items?itemName=tungvn.wordpress-snippet) - WordPress 関数のコード補完・予測、関数の説明を表示してくれる
-   [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - ファイルパスを補完候補に表示してくれる

### その他おすすめ拡張機能

-   [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar) - UI やバーを非表示にしてエディタをスッキリさせる
-   [Polacode-2020](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019) - ソースコードを画像化してくれる（コマンドパレット：polacode）

### 利用可能な Gulp コマンド

ターミナルを`Ctrl + Shift + @`で出し、以下のコマンドを実行します。

---

```bash
$ gulp
```

ファイル保存で以下のタスクが自動で走ります。

-   ブラウザのリロード
-   sass のコンパイル
-   html、css、js のコード検証
-   dest フォルダへのファイル出力

---

```bash
$ gulp imagemin
```

./src/images/に画像を入れておくと、圧縮して.dest//images/に吐き出します。

※jpg、png はより軽い.WebP に変換されます。

---

## ５．WordPress 開発環境構築

上から順番に設定します。

1. [Xampp の PHP 環境と Gulp の browser-sync の連携](https://aya404.com/blog/develop/108_xampp-php-gulp/)
1. [Composer をインストール](https://haniwaman.com/windows-composer/)
1. [WordPress-Coding-Standards の導入](https://haniwaman.com/windows-composer/)

## ６．SCSS ファイル構成

Sass は BEM 記法を採用。下のパーシャル構成は例です。

-   style.scss （最終的な CSS を生成するファイル）
-   \_imports.scss （全てのパーシャルをまとめて style.scss にインポートするファイル）

### base ディレクトリ

ベースとなるスタイルが定義されている SCSS ファイルを格納します。

-   \_base.scss （サイト共通の設定ファイル）
-   \_reset.scss （リセットする設定ファイル）

### mixin ディレクトリ

mixin が定義されている SCSS ファイルを格納します。

-   \_btn.scss （ボタン系の設定ファイル）
-   \_font.scss （フォント系の設定ファイル）
-   \_over.scss （要素オーバー時の設定ファイル）

mixin ルール

-   別 Block で同じスタイルが必要になった場合、mixin を定義する。
-   1 つの mixin に対し、1 つの定義ファイルを用意する。
-   mixin の定義ファイル名は、mixin 名と同じにする。

### module ディレクトリ

サイト共通で使用するモジュール別にスタイルが定義されている SCSS ファイルを格納します。

**格納される SCSS ファイルは、BEM 設計の Block 単位になります。**

-   \_header.scss （ヘッダーの設定ファイル）
-   \_gnav.scss （グローバルナビの設定ファイル）
-   \_main.scss （メインの設定ファイル）
-   \_content.scss （コンテンツの設定ファイル）
-   \_snav.scss （サイドナビの設定ファイル）
-   \_side.scss （サイドバーの設定ファイル）
-   \_footer.scss （フッターの設定ファイル）
-   \_fnav.scss （フッターナビの設定ファイル）
-   \_share.scss （シェアの設定ファイル）

### page ディレクトリ

ページ単位で使用するスタイルが定義されている SCSS ファイルを格納します。

-   \_index.scss （ホームページの設定ファイル）

### settings ディレクトリ

初期設定で必要なパラメータなどが定義されている SCSS ファイルを格納します。

-   \_functions.scss （関数の設定ファイル）
-   \_variables.scss （変数の設定ファイル）
