var require = {
  baseUrl: './src',
  paths: {
    'jquery': 'vendor/jquery/jquery.min',
    'jqueryxml': 'vendor/jquery.xml2json',
    'jade': 'vendor/require-jade/jade',
    'rivets': 'vendor/rivets/dist/rivets.min',
    'moment': 'vendor/moment/moment',
    'text': 'vendor/requirejs-text/text',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'skycons': 'vendor/skycons'
  },
  shim: {
    rivets: {
      exports: 'rivets'
    },
    skycons: {
      exports: 'Skycons'
    },
    jqueryxml: {
      deps: ['jquery'],
      exports: 'jQuery'
    }
  }
};
