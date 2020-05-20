const connect = require('gulp-connect');
const {  watchHTML } = require('./tasks/html');
const { watchSCSS } = require('./tasks/scss');
const {  watchJS } = require('./tasks/js');





function dev (done){
    watchHTML();
    watchSCSS();
    watchJS();
    connect.server({
        livereload: true,
        root: "tmp"
    })
    done();
}
exports.default = dev;