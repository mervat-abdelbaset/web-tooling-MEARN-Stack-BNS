const {src,dest} = require('gulp')
const htmlmin = require('gulp-htmlmin');

function htmlTask(){

    return src("project/*.html")
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dist"))
}
exports.html = htmlTask

//task css
function css(){

    return src("project/*.html")
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dist"))
}
