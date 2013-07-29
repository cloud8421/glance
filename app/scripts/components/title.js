define([
    'jquery',
    'moment',
    'backbone',
    'config/rivets',
    '../../bower_components/flight/lib/component'
  ], function (
    $,
    moment,
    Backbone,
    rivets,
    defineComponent
  ) {
    'use strict';

    function currentDate() {
      var dateFormat = 'MMMM Do YYYY, HH:mm:ss';
      return moment().format(dateFormat);
    }

    function update(model) {
      model.set('today', currentDate());
    }

    function title() {

      var date = new Backbone.Model({
        today: currentDate()
      });

      this.after('initialize', function () {
        rivets.bind(this.$node, {date: date});
        var clock = setInterval(update, 1000, date);
        $(document).on('webkitvisibilitychange', function () {
          var state = document.webkitVisibilityState;
          if (state === 'visible') {
            clock = setInterval(update, 1000, date);
          } else {
            clearInterval(clock);
          }
        });
      });
    }

    return defineComponent(title);

  });
