define([
    'jquery',
    'skycons',
    'config/rivets',
    '../../../bower_components/flight/lib/component',
    'engines/weather'
  ], function (
    $,
    Skycons,
    rivets,
    defineComponent,
    WeatherEngine
  ) {

    return defineComponent(WeatherWidget);

    function WeatherWidget() {
      this.after('initialize', function () {
        var skycons = new Skycons({"color": "white"});
        var weatherEngine = new WeatherEngine({
          type: this.attr.type,
          skycons: skycons
        });
        rivets.bind(this.$node, { engine: weatherEngine });
        // manual update of the icon.
        weatherEngine.on('sync', function (model) {
          var canvasID = this.$node.data('target');
          var iconName = model.get('icon').toUpperCase();
          // debugger;
          // skycons.add(canvasID, Skycons[iconName]);
          // skycons.play();
        }, this);
        weatherEngine.fetch();
      });
    }

  });
