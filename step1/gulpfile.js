var gulp = require('gulp');
var gutil = require('gulp-util');


gulp.task('default', function() {
  gulp.start('copy_files');
});

gulp.task('copy_files', function() {
   gulp.src('./public/**')
    .pipe(gulp.dest('./build'));
});
