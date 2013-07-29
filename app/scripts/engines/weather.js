define(['backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({

    url: function () {
      return '/weather/' + this.get('type') + '.json';
    },

    parse: function (response) {
      var customResponse = response.currently;
      customResponse.hourly = response.hourly.summary;
      customResponse.minutely = response.minutely.summary;
      return customResponse;
    }

  });

});
