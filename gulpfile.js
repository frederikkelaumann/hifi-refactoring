const connect = require('gulp-connect');
const { watchHTML } = require('./tasks/html');
const { watchSCSS } = require('./tasks/scss');
const { watchJS } = require('./tasks/js');
const {  watchIMAGES } = require('./tasks/images');



function dev (done){
    watchHTML();
    watchSCSS();
    watchJS();
    watchIMAGES();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    })
    done();
 
}

exports.default = dev;