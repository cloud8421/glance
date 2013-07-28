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

    return defineComponent(Weather, WithTabs);

    function Weather() {

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

  });
