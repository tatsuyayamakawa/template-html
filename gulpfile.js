const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
sass.compiler = require('sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const optipng = require('imagemin-optipng');
const mozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');

// Sassコンパイル
gulp.task('sass', function () {
	return gulp
		.src('./assets/sass/**/*.scss', { sourcemaps: true })
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			})
		)
		.pipe(
			sass({
				outputStyle: 'expanded',
				indentType: 'tab',
				indentWidth: 1,
			})
		)
		.pipe(
			rename('main.css')
		)
		.pipe(
			postcss([
				autoprefixer({
					// IEは11以上、Androidは4、ios safariは8以上
					// その他は最新2バージョンで必要なベンダープレフィックスを付与する
					// 指定の内容はpackage.jsonに記載
					cascade: false,
					grid: true,
				}),
			])
		)
		.pipe(postcss([cssdeclsort({ order: 'smacss' })]))
		.pipe(gulp.dest('./assets/css/', { sourcemaps: './assets/css/' }));
});

// 画像最適化
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
gulp.task('imagemin', function () {
	return gulp
		.src('./assets/src/images/')
		.pipe(imagemin(imageminOption))
		.pipe(webp())
		.pipe(gulp.dest('./assets/images/'));
});

// ブラウザ更新
gulp.task('browser-sync', function (done) {
	browserSync.init({
		proxy: 'localhost/projects/wordpress',
		files: ['./**/*.php', './assets/sass/**/*.scss', './assets/js/**/*.js'],
	});
	done();
});

gulp.task('watch', function () {
	gulp.watch('./assets/sass/**/*.scss', gulp.task('sass'));
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
