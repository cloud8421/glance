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

      this.setupEngine = function () {
        var self = this;
        this.weatherEngine = new WeatherEngine({
          type: this.attr.type
        });
        this.weatherEngine.on('request', function () {
          self.trigger('fetching');
        });
        this.weatherEngine.on('error sync', function () {
          self.trigger('fetched');
        });
      };

      this.after('initialize', function () {
        this.setupEngine();
        rivets.bind(this.$node, { engine: this.weatherEngine });
        this.reload();
      });
    }

    return defineComponent(WeatherWidget, WithReload);

  });
