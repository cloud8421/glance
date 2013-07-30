define(['backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({

    url: function () {
      return '/weather/' + this.get('type') + '.json';
    },

    parse: function (response) {
      var customResponse = response.currently;
      if (!!response.hourly) {
        customResponse.hourly = response.hourly.summary;
      } else {
        customResponse.hourly = 'N/A';
      }
      if (!!response.minutely) {
        customResponse.minutely = response.minutely.summary;
      } else {
        customResponse.minutely = 'N/A';
      }
      return customResponse;
    }

  });

});
