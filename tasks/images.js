const gulp = require('gulp');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');



function image() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/tmp/images'))
    .pipe(connect.reload);
}

function watchIMAGE () {
    return gulp
    .watch("./src/images/*", {
        ignoreInitial: false
    }, image)
}

module.exports = {
    watchIMAGE
}
