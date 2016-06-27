var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').javascript;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var coffee        = require('gulp-coffee');
var sequence      = require('run-sequence');
var uglify        = require('gulp-uglify');
var cache         = require('gulp-cached');

// MAIN JS IS LOADED IN THE BOTTOM OF <BODY>
gulp.task('javascript', function(){
  return gulp.src(config.src)
    .pipe(cache())
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    // .pipe($.uglify())
    .pipe($.concat(config.filename))
    .pipe(gulp.dest(config.dest));
});
