define(['underscore', 'backbone'], function (_, Backbone) {
  'use strict';

  var Line = Backbone.Model.extend({


  });

  return Backbone.Collection.extend({

    url: '/tube/status.json',

    model: Line,

    parse: function (response) {
      return _.map(response, function (line) {
        return {
          id: line.Line.ID,
          status: line.StatusDetails,
          name: line.Line.Name,
          cssClass: line.Status.CssClass
        };
      });
    }

  });

});
