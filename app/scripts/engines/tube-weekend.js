define(['underscore', 'backbone'], function (_, Backbone) {
  'use strict';

  var Line = Backbone.Model.extend({});

  return Backbone.Collection.extend({

    url: '/tube/weekend.json',

    model: Line,

    parse: function (response) {

      return _.map(response, function (line) {
        var data = {
          status: line.Status.Text,
          shortStatus: line.Status.Text,
          name: line.Name
        };
        if (line.Status.Message) {
          data.status = line.Status.Message.Text;
        }
        return data;
      });
    }

  });

});
