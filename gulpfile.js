var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('build', function() {
    return gulp.src('test/file.jsx')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('test'));
});

gulp.task('watch', function() {
    watch('test/file.jsx', function(file) {
        console.log('File changed', file.history[0]);
        gulp.start('build');
    });
});