'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('jshint', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('serve', ['watch'], function () {
  browserSync({
    server: {
      baseDir: './src'
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('src/styles/app.scss')
    .pipe(sass())
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('src/styles'));
});

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['reload']);
  gulp.watch('src/*/*.js', ['reload']);
});

gulp.task('default', ['serve']);
