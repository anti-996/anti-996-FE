// var gulp = require('gulp');
//
// gulp.task('mvJs', function () {
//   return gulp.src('./public.js')
//     .pipe(gulp.dest('./output/js'))
// })
//
// gulp.task('hello', function () {
//   console.log('您好');
// });
//
// gulp.task('move', ['mvJs'])

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
