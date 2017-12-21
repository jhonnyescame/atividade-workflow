var gulp 	 = require("gulp");
var del      = require("del");
var sass 	 = require('gulp-sass');
var watch 	 = require('gulp-watch');
var htmlmin  = require('gulp-htmlmin');

gulp.task('clean', function() {
	del("dist");
});

gulp.task('sass', function() {
    return gulp.src('./source/assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('html', function(){
	return gulp.src('./source/*.html')
		   .pipe(htmlmin({collapseWhitespace: true}))
		   .pipe(gulp.dest('./dist'));
});

// task bluid
gulp.task('bluid',['clean','sass','html' ], function(){
});

gulp.task('background', function() {
	gulp.watch('./source/assets/scss/*.scss', ['sass']);
	gulp.watch('./source/*.html', ['html']);
});