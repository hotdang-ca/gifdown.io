var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');


var config = {
    bootstrapDir: './bower_components/bootstrap',
    publicDir: './public',
};

gulp.task('default', ['styles', 'scripts', 'videos', 'watch']);


gulp.task('styles', function () {
    return gulp.src('resources/styles/main.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/scss']
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        //.pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
});

gulp.task('scripts', function () {
    return gulp.src('resources/scripts/**/*')
        .pipe(gulp.dest('public/js'));
});

gulp.task('videos', function () {
    return gulp.src('resources/videos/**/*')
        .pipe(gulp.dest('public/videos'));
});

gulp.task('watch', function () {
    gulp.watch('resources/styles/*.scss', ['styles']);
    gulp.watch('resources/scripts/*.js', ['scripts']);
    gulp.watch('resources/videos/**/*', ['videos']);
    // Other watchers
});
