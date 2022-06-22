const gulp = require('gulp');
const livereload = require('gulp-livereload');
const { parallel } = require('gulp');

/* plugins */
    /* gulp plugin to minify HTML.*/
    const htmlmin = require('gulp-htmlmin');
    /* gulp plugin to minify CSS, using clean-css */
    const cleanCSS = require('gulp-clean-css');
    /* gulp-fontgen plugin for gulp */
    // const gulpFont = require('gulp-font');

    /* image */
    // const imagemin = require('gulp-imagemin');
    


function miniFy_Html() { // function html
    return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
    .pipe(livereload());
}

function miniFy_Syle() { // function style
    return gulp.src('src/style/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/style'))
    .pipe(livereload());
}

function miniFy_Images() { // function for images
    return gulp.src('src/assets/*.{jpg,png,svg}')
    // .pipe(imagemin())
    .pipe(gulp.dest('build/assets'))
    .pipe(livereload());
}

function miniFy_Font() { // function for fonts
    return gulp.src('src/assets/font/*.otf')
    .pipe(gulp.dest('build/assets/font'))
    .pipe(livereload());
}


exports.default = function () {
    require("./server.js");
    livereload.listen();

    gulp.watch( ["src/*.html"], parallel(miniFy_Html, miniFy_Syle, miniFy_Images, miniFy_Font));


};