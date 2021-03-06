'use strict';

const gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  nodemon = require('gulp-nodemon'),
  todo = require('gulp-todo'),
  browserSync = require('browser-sync'),
  paths = {
    views: './public/components/**/**/*.html',
    styles: './public/sources/styles/**/*.scss',
    impSass: './public/sources/styles/style.scss',
    js: './public/components/**/**/*.js',
    jsBackEnd: './api/**/**/**/*.js',
    excss: './public/*.css'
  };

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
  browserSync.init({
    server: './public'
  })
  nodemon();
});

gulp.task('to-do', () => {
  gulp.src(['./public/**/**/**/**/*.js'])
    .pipe(todo())
    .pipe(gulp.dest('./'));
});

gulp.task('dependencies', () => {
  gulp.src([
      './node_modules/angular/angular.min.js'
    ])
    .pipe(gulp.dest('./public/lib/angular'));

  gulp.src([
      './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
      './node_modules/oclazyload/dist/ocLazyLoad.min.js',
      './node_modules/ui-router-page-title/page-title.min.js',
    ])
    .pipe(gulp.dest('./public/lib/angular/routing'));

  gulp.src([
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/popper.js/dist/umd/popper.min.js'
  
    ])
    .pipe(gulp.dest('./public/lib/bootstrap'));

    gulp.src([
      './node_modules/animate.css/animate.min.css'
    ])
    .pipe(gulp.dest('./public/lib/animate'));

    
    gulp.src([
      './node_modules/jquery/dist/jquery.js'
    ])
    .pipe(gulp.dest('./public/lib/jquery'));

    gulp.src([
      './node_modules/vegas/dist/vegas.min.css',
      './node_modules/vegas/dist/vegas.min.js'
    ])
    .pipe(gulp.dest('./public/lib/vegas'));

  gulp.src([
      './node_modules/sweetalert/dist/sweetalert.min.js'
    ])
    .pipe(gulp.dest('./public/lib/sweetalert'));


    gulp.src([
      './node_modules/wowjs/dist/wow.min.js'
    ])
    .pipe(gulp.dest('./public/lib/wow'));


  gulp.src([
    './node_modules/ng-file-upload/dist/ng-file-upload.min.js',
    './node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js'
    ])
    .pipe(gulp.dest('./public/lib/ng-file-upload'));

    gulp.src([
      './node_modules/ngmap/build/scripts/ng-map.min.js'
    ])
      .pipe(gulp.dest('./public/lib/ng-map'));

      
    gulp.src([
      './node_modules/angular-jk-rating-stars/dist/jk-rating-stars.min.css',
      './node_modules/angular-jk-rating-stars/dist/jk-rating-stars.min.js'
    ])
      .pipe(gulp.dest('./public/lib/rating'));
      
});

gulp.task('reload', () => {
  gulp.src([paths.views, paths.styles, paths.js, paths.jsBackEnd])
    .pipe(connect.reload())
    .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  gulp.src(paths.impSass)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./public/sources'));
});

gulp.task('watch', () => {
  gulp.watch([paths.views, paths.styles, paths.js], ['reload', 'to-do', 'styles'])
    .on('change', browserSync.reload);
});

gulp.task('default', ['connect', 'to-do', 'dependencies', 'reload', 'styles', 'watch']);