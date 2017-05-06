'use strict'

var gulp = require('gulp');

gulp.task('html',function(){
	gulp.src('www/*.html')
	.pipe(browserSync.reload({
		stream:true
	}));
});

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('server',function(){
	browserSync({
		server:{
			baseDir:['www']
		},
	},
	function(err,bs){
		console.log(bs.options.getIn(['urls','local']));
	});
	gulp.watch('www/*.html',['html']);
})