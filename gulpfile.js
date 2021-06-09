const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const minJs = require('gulp-minify');
const minCss = require('gulp-minify-css');
const del = require("del");

const distPath = './dist/vendors/';

// Clean
function clean(cb) {
    return del(['dist'], cb);
}

// Copy Plugins Assets to Dist
function pluginCopyTask(cb) {

    // Jquery
    src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(dest(distPath + 'jquery'));

    // Bootstrap CSS
    src('./node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(dest(distPath + 'bootstrap'))

    // Bootstrap JS
    src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(dest(distPath + 'bootstrap'));

    // Owl Carousel
    src('./node_modules/owl.carousel/dist/assets/owl.carousel.css')
        .pipe(minCss()).pipe(dest(distPath + 'owl.carousel'));
    src('./node_modules/owl.carousel/dist/owl.carousel.js')
        .pipe(minJs()).pipe(dest(distPath + 'owl.carousel'));
    
    // Animate CSS
    src('./node_modules/animate.css/animate.css')
        .pipe(dest(distPath + 'animate.css'));

    // WOW JS
    src('./node_modules/wowjs/dist/wow.js')
        .pipe(dest(distPath + 'wow'));

    // Parallax JS
    src('./node_modules/jquery-parallax.js/parallax.js')
        .pipe(dest(distPath + 'parallax'));

    // Simplelightbox JS
    src('./node_modules/simplelightbox/dist/simple-lightbox.css')
        .pipe(minCss()).pipe(dest(distPath + 'simplelightbox'));
    src('./node_modules/simplelightbox/dist/simple-lightbox.js')
        .pipe(minJs()).pipe(dest(distPath + 'simplelightbox'));
        
    cb();
}

// Image Folder Task
function imageTask(cb) {
    src('./assets/images*/**/*')
        .pipe(dest('./dist'));
    cb();
}

// Image Folder Task
function fontTask(cb) {
    src('./assets/fonts*/**/*')
        .pipe(dest('./dist'));
    cb();
}

// Sass Task
function scssTask(cb) {
    src('./assets/scss/style.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(dest('./dist/css'));
    cb();

    src('./assets/scss/init-loader.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(dest('./dist/css'));
    cb();
}

// JavaScript Task
function jsTask(cb){
    src('assets/js/functions.js')
        .pipe(terser())
        .pipe(dest('./dist/js'));
    cb();
}

function watchSass(cb) {
    watch(['./assets/scss/style.scss','./assets/scss/init-loader.scss'], scssTask)
    cb();
}

// Browsersync Tasks
function browsersyncServe(cb){
    browsersync.init({
      server: {
        baseDir: '.'
      }
    });
    cb();
  }
  
  function browsersyncReload(cb){
    browsersync.reload();
    cb();
  }
  
  // Watch Task
  function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['assets/scss/**/*.scss', 'assets/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
  }


exports.watchSass = watchSass;
exports.clean = clean;
exports.pluginCopyTask = pluginCopyTask;
exports.scssTask = scssTask;
exports.default = series(clean, pluginCopyTask, imageTask, fontTask, scssTask, jsTask, browsersyncServe, watchTask);



