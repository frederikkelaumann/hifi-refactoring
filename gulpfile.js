const connect = require('gulp-connect');
const { watchHTML, buildHTML } = require('./tasks/html');
const { watchSCSS, buildSCSS } = require('./tasks/scss');
const { watchJS, buildJS } = require('./tasks/js');
const {  watchIMAGES, buildIMAGE } = require('./tasks/images');



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
function build(done) {
    buildHTML();
    buildSCSS();
    buildJS();
    buildIMAGE();
    done()
}

exports.default = dev;
exports.build = build;