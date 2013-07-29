define(['underscore', 'backbone'], function (_, Backbone) {
  'use strict';

  var News = Backbone.Model.extend({


  });

  return Backbone.Collection.extend({

    initialize: function (opts) {
      this.type = opts.type;
    },

    url: function () {
      return '/news/' + this.type + '.json';
    },

    model: News,

    parse: function (response) {
      return response.response.results;
    }

  });

});
