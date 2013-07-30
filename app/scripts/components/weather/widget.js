define([
    'jquery',
    'config/rivets',
    '../../../bower_components/flight/lib/component',
    'engines/weather',
    'mixins/reload'
  ], function (
    $,
    rivets,
    defineComponent,
    WeatherEngine,
    WithReload
  ) {
    'use strict';

    function WeatherWidget() {
      this.reload = function () {
        this.weatherEngine.fetch();
      };

      this.after('initialize', function () {
        this.weatherEngine = new WeatherEngine({
          type: this.attr.type
        });
        rivets.bind(this.$node, { engine: this.weatherEngine });
        this.reload();
      });
    }

    return defineComponent(WeatherWidget, WithReload);

  });
