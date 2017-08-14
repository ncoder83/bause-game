var gulp = require('gulp');
var jsmini = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['publish']);

/*
    publish to game folder the finish product
*/

gulp.task('publish', function(){
    gulp.src(['./app/*.js'])
    .pipe(concat('bause.min.js'))
    .pipe(jsmini())
    .pipe(gulp.dest('./game'));
});

gulp.task('watch', function(){
    gulp.watch('./app/*.js', ['publish']);
});