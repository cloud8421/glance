define([
    '../../bower_components/flight/lib/component',
    'engines/tube',
    'engines/tube-weekend',
    'components/base/collection-view',
    'mixins/tabs'
  ], function (
    defineComponent,
    TubeEngine,
    TubeWeekendEngine,
    CollectionView,
    WithTabs
  ) {
    'use strict';

    function tube () {

      this.defaultAttrs({
        statusContainer: '#tube-status .lines',
        weekendContainer: '#tube-weekend .lines'
      });

      this.after('initialize', function () {
        var tubeEngine = new TubeEngine();
        var tubeWeekendEngine = new TubeWeekendEngine();
        CollectionView.attachTo(this.select('statusContainer'), {
          engine: tubeEngine
        });
        CollectionView.attachTo(this.select('weekendContainer'), {
          engine: tubeWeekendEngine
        });
        tubeEngine.fetch();
        tubeWeekendEngine.fetch();
      });
    }

    return defineComponent(tube, WithTabs);

  });
