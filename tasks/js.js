const gulp = require('gulp');
const connect = require('gulp-connect');
const sourcemaps = require('gulp-sourcemaps');



function js() {
    return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('tmp/assets/js'))
    .pipe(connect.reload());
}
function buildJS() {
    return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('dist/assets/js'))
   
}


function watchJS() {
    return gulp
    .watch("./src/**/*.js", {
        ignoreInitial: false
    }, js);

}

module.exports = {
    watchJS,
    buildJS
}