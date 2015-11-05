var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('browserify', function() {
    return browserify('./source/app.jsx')
        .transform(babelify)
        .bundle()
        .pipe(source('ocelot-routing.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('./source/**/*.*', ['browserify']);
  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('server', function() {
    connect.server({
        root:'./build',
        port:3000
    });
});

gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify', 'watch', 'server']);