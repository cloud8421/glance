define([
    'jquery',
    '../../bower_components/flight/lib/component',
    'components/weather/widget',
    'mixins/tabs'
  ], function (
    $,
    defineComponent,
    WeatherWidget,
    WithTabs
  ) {
    'use strict';

    function Weather () {

      function attachWidgetToElement() {
        var targetId = '#' + this.id;
        var targetType = this.dataset.type;
        WeatherWidget.attachTo(targetId, {
          type: targetType
        });
      }

      this.after('initialize', function() {
        this.select('widgets').each(attachWidgetToElement);
      });

    }

    return defineComponent(Weather, WithTabs);

  });
