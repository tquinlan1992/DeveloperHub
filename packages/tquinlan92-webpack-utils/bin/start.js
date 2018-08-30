const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

process.chdir(process.env.PWD);

gulp.task('assets' , () => {
    gulp.src('./assets/**/*').pipe((gulp.dest('./dist/assets')));
});

const typescriptProject = typescript.createProject('./tsconfig.json', {
  inlineSourceMap: false,
  inlineSources: false 
});

gulp.task('tsc', () => {
    const compiled = typescriptProject.src().pipe(sourcemaps.init()).pipe(typescriptProject());
    compiled.pipe(sourcemaps.write());
    compiled.js.pipe(gulp.dest('./dist'));
    compiled.dts.pipe(gulp.dest('./dist'));
});

gulp.task('ci', ['tsc', 'assets']);

gulp.task('watchTs', () => {
    gulp.watch(['./src/**/*'], ['tsc']);
});

gulp.task('watchAssets', () => {
    gulp.watch(['./assets/**/*'], ['assets']);
});

gulp.task('watch', ['ci', 'watchTs', 'watchAssets']);

gulp.task('default', ['watch']);