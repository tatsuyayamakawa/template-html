const gulp = require('gulp');

/* sass */
const sass = require('gulp-sass'); // Sassコンパイル
const plumber = require('gulp-plumber'); // エラー時の強制終了を防止
const notify = require('gulp-notify'); // エラー発生時にデスクトップ通知
const sassGlob = require('gulp-sass-glob'); // @importの記述を簡潔に
const postcss = require('gulp-postcss'); // autoprefixerとセット
const autoprefixer = require('autoprefixer'); // ベンダープレフィックス付与
const cssdeclsort = require('css-declaration-sorter'); // css並べ替え
/* sassのコンパイル */
gulp.task('sass', function () {
  return (
    gulp
      .src('./scss/**/*.scss')
      .pipe(
        plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
      )
      .pipe(sassGlob()) // importの読み込みを簡潔に
      .pipe(
        sass({
          outputStyle: 'expanded', // expanded, nested, campact, compressedから選択
        })
      )
      .pipe(
        postcss([
          autoprefixer({
            /* ☆IEは11以上、Androidは5以上 */
            /* その他は最新2バージョンで必要なベンダープレフィックスを付与 */
            overrideBrowserslist: [
              'last 2 versions',
              'ie >= 11',
              'Android >= 5',
            ],
            cascade: false,
          }),
        ])
      )
      /* プロパティをソートし直す */
      .pipe(postcss([cssdeclsort({ order: 'smacss' })])) // alphabetical, smacss, concentric-cssから選択
      .pipe(gulp.dest('./css')) // コンパイル後の出力先
  );
});

/* browser-sync */
const browserSync = require('browser-sync'); // ブラウザ反映

/* imagemin */
const imagemin = require('gulp-imagemin');
const optipng = require('imagemin-optipng');
const mozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');
/* 圧縮率の定義 */
const imageminOption = [
  optipng({ optimizationLevel: 5 }),
  mozjpeg({ quality: 85 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256,
  }),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo(),
];

/* ejs */
const ejs = require('gulp-ejs');
const rename = require('gulp-rename'); // .ejsの拡張子を変更
gulp.task('ejs', (done) => {
  gulp
    .src(['ejs/**/*.ejs', '!' + 'ejs/**/_*.ejs'])
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }) // エラーチェック
    )
    .pipe(ejs())
    .pipe(rename({ extname: '.html' })) // 拡張子をhtmlに
    .pipe(gulp.dest('./')); // 出力先
  done();
});

/* 監視 */
gulp.task('watch', function (done) {
  gulp.watch('./scss/**/*.scss', gulp.task('sass')); // sassが更新されたらgulp sassを実行
  gulp.watch('./scss/**/*.scss', gulp.task('bs-reload')); // sassが更新されたらbs-reloadを実行
  gulp.watch('./js/*.js', gulp.task('bs-reload')); // jsが更新されたらbs-relaodを実行
  gulp.watch('./*.html', gulp.task('bs-reload')); // htmlが更新されたらbs-relaodを実行
  gulp.watch('./ejs/**/*.ejs', gulp.task('ejs')); // ejsが更新されたらgulp-ejsを実行
  gulp.watch('./ejs/**/*.ejs', gulp.task('bs-reload')); // ejsが更新されたらbs-reloadを実行
});

/* 保存時のリロード */
gulp.task('browser-sync', function (done) {
  browserSync.init({
    /* ローカル開発 */
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  done();
});

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});

/* 画像の圧縮 */
gulp.task('imagemin', function () {
  return gulp
    .src('./images/src/*') // $ gulp imageminで./images/src/フォルダ内の画像を圧縮し./images/フォルダへ
    .pipe(imagemin(imageminOption))
    .pipe(webp())
    .pipe(gulp.dest('./images'));
});

/* default */
gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
