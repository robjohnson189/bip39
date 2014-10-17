var 	gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');


gulp.task('default', ['compress']);

gulp.task('compress', function() {
	gulp.src(['src/js/jquery.min.js','src/js/bootstrap.min.js','src/js/bitcoinjs-1-0-0-.js',
		'src/js/sjcl-bip39.js','src/js/wordlist_english.js','src/js/jsbip39.js', 'src/js/index.js'])
		.pipe(concat('concat.js'))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename('uglify.js'))
		.pipe(gulp.dest('dist'))
});
