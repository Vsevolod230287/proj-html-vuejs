let mix = require('laravel-mix');

mix.sass('src/scss/master.scss','dist/css/').options({
  processCssUrls: false
})

mix.js('src/app.js', 'dist/js/');
