var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfos) {
      console.log(errorInfos.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
