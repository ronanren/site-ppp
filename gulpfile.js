const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '.'
        },
    })
})