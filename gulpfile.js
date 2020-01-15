const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssvariables = require('postcss-css-variables');

const { src, dest, watch } = require('gulp');

function css() {
    var plugins = [
        cssvariables(),
        autoprefixer(),
        cssnano()
    ];

    return src('css/!(*.min)*.css')
        .pipe(postcss(plugins))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(file => file.base))
        .pipe(browserSync.stream());
}

function js() {
    return src('js/!(*.min)*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(file => file.base))
        .pipe(browserSync.stream())
}

exports.css = css
exports.js = js

exports.default = function() {

    browserSync.init({
        server: "./"
    });

    css();
    js();
    
    watch('css/!(*.min)*.css', css);
    watch('js/!(*.min)*.js', js);
    watch("*.html").on('change', browserSync.reload);
};

