var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',['js']);

gulp.task('js',function(){
  return gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./www/js/'));
});
gulp.task('vendor',function(){
  return gulp.src('./node_modules/**/*.min.js')
    .pipe(gulp.dest('./www/vendor/'));
});
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
