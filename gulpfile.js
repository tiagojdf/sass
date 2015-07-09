var gulp = require('gulp');

gulp.task('default',['js']);

gulp.task('js',function(){
  return gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./www/js/'));
});
gulp.task('vendor',function(){
  return gulp.src('./node_modules/**/*.min.js')
    .pipe(gulp.dest('./www/vendor/'));
});
