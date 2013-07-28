require.config({
  paths: {
    'jquery': '../bower_components/jquery/jquery.min',
    'jade': '../bower_components/require-jade/jade',
    'rivets': '../bower_components/rivets/dist/rivets.min',
    'moment': '../bower_components/moment/moment',
    'text': '../bower_components/requirejs-text/text',
    'underscore': '../bower_components/underscore-amd/underscore',
    'backbone': '../bower_components/backbone-amd/backbone',
    'skycons': '../bower_components/skycons'
  },
  shim: {
    rivets: {
      exports: 'rivets'
    },
    skycons: {
      exports: 'Skycons'
    }
  }
});

require([
    'components/title',
    'components/weather',
    'components/tube',
    'components/news'
  ], function (
    Title,
    Weather,
    Tube,
    News
  ) {
    Title.attachTo('#today h1');
    Weather.attachTo('#weather');
    Tube.attachTo('#tube');
    News.attachTo('#news');
  });
