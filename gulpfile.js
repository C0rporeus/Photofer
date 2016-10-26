var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')

//estilos gulp
gulp.task('styles', function(){
	gulp
	 .src('index.scss')
	 .pipe(sass())
	 .pipe(rename('app.css'))
	 .pipe(gulp.dest('public'));
	});

//observar y organizar los assets
gulp.task('assets', function () {
	gulp
	 .src('assets/*')
	 .pipe(gulp.dest('public'));
	})

//definir el archivo logico primario transformando lo que se tiene a babel y llevandolo a public con el resto de componentes
//igualmente cambia el nombre originario con el fin de unificar todos los recursos en un archivo unico y minificado con cada uno de los recursos invocados
gulp.task('scripts', function () {
	 browserify('./src/index.js')
	  .transform(babel)
	  .bundle()
	  .pipe(source('index.js'))
	  .pipe(rename('app.js'))
	  .pipe(gulp.dest('public'));
	})


gulp.task('default', ['styles', 'assets', 'scripts'])