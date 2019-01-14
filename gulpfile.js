const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
 
function style() {
    return (
        gulp
            .src('./scss/app.scss')
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest('./css/'))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    );
}
 
function watch() {
    return(
        gulp.
            watch('scss/*.scss', style)
    );
}
 
exports.watch = watch;