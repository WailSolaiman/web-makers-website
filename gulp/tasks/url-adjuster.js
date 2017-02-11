var gulp = require('gulp');
var urlAdjuster = require('gulp-css-url-adjuster');

gulp.task('url-adjuster', function() {
  return gulp.src('./app/assets/styles/**/*.css')
    .pipe(urlAdjuster({
      replace:  ['/temp/styles/','/assets/images/']
    }))
    .pipe(gulp.dest('./app/temp/styles'));
});
