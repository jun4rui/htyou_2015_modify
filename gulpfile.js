//引用gulp
var gulp    = require('gulp');

//包含插件
//var concat  = require('concat');
var imagemin= require('gulp-imagemin');
var pngquant= require('imagemin-pngquant');
//var uglify  = require('gulp-uglify');

gulp.task('imagemin',function(){
    gulp.src('ORG_images/*.{jpg,jpeg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
});

gulp.task('pngquant',function(){
    gulp.src('ORG_images/*.png')
        .pipe(pngquant({quality: '65-80', speed: 4})())
        .pipe(gulp.dest('images'));
});

gulp.task('default', function(){
    gulp.start('imagemin','pngquant');
});