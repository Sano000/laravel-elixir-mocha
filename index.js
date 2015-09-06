'use strict';

var map         = require('map-stream'),
    gulp        = require('gulp'),
    mocha       = require('gulp-mocha'),
    notify      = require('gulp-notify'),
    elixir      = require('laravel-elixir');

var config = elixir.config;

elixir.extend('mocha', function (src, options) {
  src     = src     || config.get('assets.js.folder') + '/**/*Spec.js';
  options = options || {};


  new elixir.Task('mocha', function () {
    return gulp.src(src)
      .pipe(mocha(options))
      .once('error', function (e) {
        gulp.src(src)
        .pipe(notify({
          title: 'Laravel Elixir',
          message: 'JavaScript test failed: ' + e.message,
          icon: __dirname + '/../laravel-elixir/icons/fail.png'
        }));
      })
      .once('end', function () {
        gulp.src(src)
        .pipe(notify({
          title: 'Laravel Elixir',
          message: 'JavaScript tests passed',
          icon: __dirname + '/../laravel-elixir/icons/pass.png'
        }));
      });
  })
  .watch(src)
  .watch(src, 'tdd');
});
