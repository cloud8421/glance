define(['underscore', 'backbone'], function (_, Backbone) {

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
