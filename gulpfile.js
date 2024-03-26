const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function cumprimeImagens() {
    return gulp.src('./source/imagem/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagem'));
}

function cumprimeJs() {
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/script'));
}

function compilaSass() {
    return gulp.src('./source/stayle/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/stayle'));

}

exports.default = function() {
    gulp.watch('./source/stayle/*scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(cumprimeJs));
    gulp.watch('./source/imagem/*', {ignoreInitial: false}, gulp.series(cumprimeImagens));

}