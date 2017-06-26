var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var del = require('del');

gulp.task('clear', () => {
  del('dist/**', { force: true });
});

gulp.task('build', ['clear'], () => {
  var tsProject = tsc.createProject('tsconfig.json');
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/src'));
});

gulp.task('server', ['build'], () => {
  return nodemon({
    script: 'dist/src/server.js',
    watch: ['src/'],
    ext: 'ts json',
    env: { 'NODE_ENV': 'development' },
    tasks: ['build']
  })
});

gulp.task('default', ['server']);
