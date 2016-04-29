var flarum = require('flarum-gulp');

flarum({
  modules: {
    'kloknibor/Photonic3d-forum': [
      'src/**/*.js'
    ]
  }
});