const gulp = require('gulp'),
      rename = require('gulp-rename'),
      stylus = require('gulp-stylus'),
      pug = require('gulp-pug');

const buildExample = () =>
    gulp.src('./index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))

const buildNormal = () =>
    gulp.src('./index.styl')
    .pipe(stylus())
    .pipe(rename('ukrop.css'))
    .pipe(gulp.dest('./dist'));

const buildMinified = () =>
    gulp.src('./index.styl')
    .pipe(stylus({
        compress: true
    }))
    .pipe(rename('ukrop.min.css'))
    .pipe(gulp.dest('./dist'));

const watch = () => {
    gulp.watch(['./index.styl', './lib/**/*.styl', './index.pug', './Readme.md'], build);
};

const build = gulp.parallel(buildNormal, buildMinified, buildExample);

const defaultTask = gulp.series(build, watch);

exports.build = build;
exports.default = defaultTask;