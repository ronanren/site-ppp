const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('minify-css', () => {
    return gulp.src('css/!(*.min)*.css')
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(file => file.base))
        .pipe(browserSync.stream());
});

gulp.task('minify-js', function () {
    return gulp.src('js/!(*.min)*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(file => file.base))
        .pipe(browserSync.stream())
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/!(*.min)*.css", gulp.task('minify-css'));
    gulp.watch("js/!(*.min)*.js", gulp.task('minify-js'));
    gulp.watch("*.html").on('change', browserSync.reload);
});

// gulp.task('default', ['serve']);