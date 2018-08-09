const gulp = require('gulp'),
nunjucks = require('gulp-nunjucks'),
rename = require('gulp-rename'),
livereload = require("gulp-livereload"),
serve = require("gulp-serve"),
data = require('gulp-data');


gulp.task('serve', serve({ root: ['./'], port: 8000}));
gulp.task('default', () =>{
    var infos = require('./src/infos.json');
    gulp.src('./src/tpl/index.njk')
        .pipe(data(() => infos))
        .pipe(nunjucks.compile())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
        .pipe(livereload())
});

gulp.task('njk:watch', function () {
    livereload.listen();
    gulp.watch(['./src/**/*'], ['default']);
});