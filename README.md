# テンプレートの使い方

## WordPress 開発環境構築

ローカルサーバー構築に XAMPP をインストールします。

-   [XAMPP のダウンロード](https://www.apachefriends.org/jp/index.html)

WordPress 公式サイト から WordPress をダウンロードします。

-   [WordPress のダウンロード](https://ja.wordpress.org/download/)

`htdocs`に`projects`フォルダを作り、解凍した`wordpress`フォルダを配置します。

例：`C:\xampp\htdocs\projects\wordpress`

### データベースの作成

XAMPP コントロールパネルから MySQL の Admin をクリックしてデータベースにアクセスします。

新規作成から**データベース名に wp**（違う名前でも OK）と入力。
照合順序は**utf8_general_ci**に変更して作成をクリックします。

![2021-06-16_23h26_38](https://user-images.githubusercontent.com/5243452/122237974-b80df380-cefa-11eb-82b1-02a20314d56f.png)

### WordPress のインストール

`C:\xampp\htdocs\projects\wordpress`にある`wp-config-sample.php`を複製し、`wp-config.php`にリネームします。

![2021-06-22_10h22_25](https://user-images.githubusercontent.com/5243452/122848062-c8333200-d343-11eb-86c6-374f23177d99.png)

`wp-config.php`を開き、27 ～ 35 行目を以下のように変更します。

```php
// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'wp' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'root' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', '' );
```

データベース名 → 先ほど作成したデータベース名
ユーザー名 → root
パスワード → 空欄

ブラウザを開き、`http://localhost/projects/wordpress/`にアクセスします。
WordPress インストール画面が出るはずです。

以下のように記入し、「送信」をクリックします。

![2021-06-22_10h57_38](https://user-images.githubusercontent.com/5243452/122850779-cc158300-d348-11eb-88ed-2cf7d46352bf.png)

このような画面が出るので、「今すぐインストールを実行」をクリックします。

![2021-06-22_11h02_55](https://user-images.githubusercontent.com/5243452/122856702-31ba3d00-d352-11eb-9210-265e8eb27ab8.png)

次に WordPress のログイン情報の設定です。
先ほどまでのデータベースのものとは違いますので、自由に設定してください。

「WordPress をインストール」をクリックします。

![2021-06-22_11h05_40](https://user-images.githubusercontent.com/5243452/122851380-d3895c00-d349-11eb-97b7-264f64628ad7.png)

WordPress のインストールができました。
ログインできるか確認してブラウザにブックマークしておくと便利でしょう。

![2021-06-22_11h11_10](https://user-images.githubusercontent.com/5243452/122851814-95d90300-d34a-11eb-97c4-005cb0508293.png)

### Composer のインストール

Composer をインストールします。

-   [Composer のダウンロード](https://getcomposer.org/)

Composer は PHP のパッケージ管理ツールです。
「PHP_CodeShiffer」と「WordPress-Coding-Standards」をインストールするのに必要となります。

「PHP_CodeShiffer」は PHP のコーディング規約を確認してくれるツール。
「WordPress-Coding-Standards」がさらにそれを WordPress 基準で確認してくれるようになるツールです。

インストールが完了したらコマンドプロンプトを起動して以下のコマンドが使えるかテストします。

```sh
$ composer --version
```

バージョンが表示されれば OK です。

### PHP_CodeShiffer のインストール

以下のコマンドで「PHP_CodeShiffer」をインストールします。

```sh
$ composer global require "squizlabs/php_codesniffer=*"
```

以下の phpcs コマンドが通れば OK です。

```sh
$ phpcs -i
The installed coding standards are PEAR, Squiz, PSR2, PHPCS, PSR1, Zend and MySource
```

### GitHub のアカウント作成

GitHub のアカウントをまだ持っていない場合はここでしておきましょう。

-   [GitHub アカウント作成](https://github.co.jp/)

### Git のインストール

Git をインストールします。

-   [Git のダウンロード](https://git-scm.com/)

コマンドプロンプトを起動します。
以下の Git コマンドでバージョンが表示されれば OK です。

```sh
$ git --version
git version 2.31.1.windows.1
```

#### Git の初期設定

名前とメールアドレスを登録します。
GitHub で作成したものを使用してください。

```sh
$ git config --global user.name 'tatsuyayamakawa'
```

```sh
$ git config --global user.email 'examplegmail.com'
```

以下コマンド実行します。
色々表示されますが、最後の行で名前とメールアドレスが確認できれば OK です。

```sh
$ git config --list
> user.name=tatsuyayamakawa
> user.email=examplegmail.com
```

### WordPress-Coding-Standards のダウンロード

cd コマンドでダウンロードするフォルダに移動します。
ドライブなど違う方は各々変更してください。

```sh
$ cd C:\xampp\php\pear\PHP\CodeSniffer\Standards
```

以下のコマンドで「WordPress-Coding-Standards」をクローン（ダウンロード）します。

```sh
$ git clone -b master https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git
```

XAMPP の PHP フォルダに移動します。

```sh
$ cd c:\xampp\php
```

phpcs コマンドでパスを設定します。

```sh
$ phpcs --config-set installed_paths c:\xampp\php\pear\PHP\CodeSniffer\Standards\WordPress-Coding-Standards
```

以下のコマンドが通れば設定完了です。

```sh
$ phpcs -i
> The installed coding standards are MySource, PEAR, PSR1, PSR2, Squiz, Zend, WordPress, WordPress-Core, WordPress-Docs, WordPress-Extra and WordPress-VIP
```

### Visual Studio Code のインストール

Visual Studio Code をインストールします。

-   [Visual Studio Code のダウンロード](https://code.visualstudio.com/download)

### リポジトリの clone

GitHub から temp-wp を PC にクローン（コピー）します。

Visual Studio Code を起動し、`Ctrl+Shift+@`でターミナルを開きます。
以下のコマンドで XAMPP 内にインストールした WordPress の themes フォルダまで移動します。

```sh
cd C:\xampp\htdocs\projects\wordpress\wp-content\themes
```

![2021-06-22_11h59_14](https://user-images.githubusercontent.com/5243452/122856180-5530b800-d351-11eb-9f45-2526e79343b9.png)

続けて、以下のコマンドで temp-wp をクローンします。

```sh
$ git clone git@github.com:tatsuyayamakawa/temp-wp.git
```

themes フォルダに temp-wp フォルダができているか確認してください。

![2021-06-22_12h01_38](https://user-images.githubusercontent.com/5243452/122856404-b48ec800-d351-11eb-8d0a-0b27f76b35c9.png)

Visual Studio Code 左上の「フォルダーを開く」から temp-wp を開きます。

![2021-06-22_16h09_55](https://user-images.githubusercontent.com/5243452/122879838-50313000-d374-11eb-88a4-ad7173026db8.png)

ターミナルで以下のコマンドを実行します。

```sh
$ git init
```

temp-wp フォルダ内に.git という隠しフォルダが生成されます。

![2021-06-22_16h34_44](https://user-images.githubusercontent.com/5243452/122883078-cb481580-d377-11eb-99ae-9a54804dad7f.png)

ここにはリポジトリーの情報が記載されており、以下のコマンドで確かめることができます。

```sh
$ git remote -v
> origin  git@github.com:tatsuyayamakawa/temp-wp.git (fetch)
> origin  git@github.com:tatsuyayamakawa/temp-wp.git (push)
```

`temp-wp` リポジトリーを利用しているということがわかります。

### リポジトリの作成

クローンした temp-wp を個人開発用として使えるようにします。

GitHub に新しくテーマ開発用リモートリポジトリを作成します。

左上の「New」ボタンをクリックします。

![2021-06-22_15h32_38](https://user-images.githubusercontent.com/5243452/122875539-5cff5500-d36f-11eb-9313-84db1dc2fa20.png)

リポジトリ名を入力します。

ここでは`new-theme`としますが、各々自由に決めてください。

最後に「Create repository」をクリックします。

![2021-06-22_15h34_08](https://user-images.githubusercontent.com/5243452/122875542-5e308200-d36f-11eb-9bf7-9a2f13f138c0.png)

リモートリポジトリを作成するとこのような URL が発行されますのでコピーします。

![2021-06-22_15h47_39](https://user-images.githubusercontent.com/5243452/122877120-37734b00-d371-11eb-9667-8432122afb60.png)

ターミナルで以下のコマンドの git@以下を置き換えて実行します。

```sh
$ git remote set-url origin git@github.com:tatsuyayamakawa/new-theme.git
```

続けて、以下のコマンドで接続構成を確認します。

```sh
$ git remote -v
> origin  git@github.com:tatsuyayamakawa/new-theme.git (fetch)
> origin  git@github.com:tatsuyayamakawa/new-theme.git (push)
```

名前と URL が新しいものに変わっていれば成功です。
`temp-wp`の接続先が`new-theme`に変更されました。

以上の流れは以下にも記載していますので参考にしてください。

-   [Github に保存した HTML テンプレートを開発ごとに clone して複製利用したい](https://qiita.com/tatsuya_yamakawa/items/ee922540e591683c8ee4)

## ２．Gulp の環境構築

※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※
開発作業は src フォルダ内で行うこと。
本番ファイルは Gulp を通して dest フォルダに生成されます。
※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※

事前に[node.js](https://nodejs.org/ja/)をインストールしてください。
最新版ではなく**推奨版にする**こと。

`temp-wp`に`gulpfile.js` と `package.json` があるか確認してください。

ターミナルで下記コマンドを実行します。

```sh
$ npm install
```

プラグインがインストールされます。

少し時間がかかりますので待ってください。

## ３．拡張機能のインストール

Visual Studio Code では様々な便利機能をインストールすることができます。

この`temp-wp`テンプレートは拡張機能が必要な機能もあります。

以下に紹介する「**必須な拡張機能**」は必ず入れるようにしてください。

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
-   [WordPress Snippet](https://marketplace.visualstudio.com/items?itemName=tungvn.wordpress-snippet) - WordPress 関数のコード補完・予測、関数の説明を表示してくれる
-   [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - ファイルパスを補完候補に表示してくれる
-   [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - .md ファイルのプレビューを表示する（ショートカット：Ctrl + K → V）

### その他おすすめ拡張機能

-   [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar) - UI やバーを非表示にしてエディタをスッキリさせる
-   [Polacode-2020](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019) - ソースコードを画像化してくれる（コマンドパレット：polacode）

### 利用可能な Gulp コマンド

ターミナルを`Ctrl + Shift + @`で出し、以下のコマンドを実行します。

---

```sh
$ gulp
```

ファイル保存で以下のタスクが自動で走ります。

-   ブラウザのリロード
-   sass のコンパイル
-   html、css、js のコード検証

---

```sh
$ gulp imagemin
```

./assets/images/src/に画像を入れておくと、圧縮して./assets/images/に吐き出します。

※jpg、png はより軽い.WebP に変換されます。
.WebP を使わない方は無視していい機能です。

---

## ４．開発スタート

ここまで準備ができたら開発をスタートさせてください。

Visual Studio Code や Gulp が初めての方は見慣れないファイルがあるかと思います。

以下のファイルは開発環境に必要なものですが、WordPress テーマには必要ないものです。
ちょっと邪魔で見にくいかもしれませんが、無視して作業を進めてください。

-   .vscode
-   .eslintrc.json
-   .gitignore
-   .prettierrc.json
-   .stylelintrc.json
-   gulpfile.js
-   package-lock.json
-   package.json
-   README.md

## ５．SASS の記法について

`temp-wp`テンプレートでは SASS 記法を Dart Sass に統一しています。

Lib Sass で書こうとすると構文チェックでエラーが出るかもしれません。
