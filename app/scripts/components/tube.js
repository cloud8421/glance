define([
    '../../bower_components/flight/lib/component',
    'engines/tube',
    'engines/tube-weekend',
    'components/base/collection-view',
    'mixins/tabs',
    'mixins/reload'
  ], function (
    defineComponent,
    TubeEngine,
    TubeWeekendEngine,
    CollectionView,
    WithTabs,
    WithReload
  ) {
    'use strict';

    function tube () {

      this.defaultAttrs({
        statusContainer: '#tube-status .lines',
        weekendContainer: '#tube-weekend .lines'
      });

      this.reload = function () {
        this.tubeEngine.fetch();
        this.tubeWeekendEngine.fetch();
      };

      this.after('initialize', function () {
        this.tubeEngine = new TubeEngine();
        this.tubeWeekendEngine = new TubeWeekendEngine();
        CollectionView.attachTo(this.select('statusContainer'), {
          engine: this.tubeEngine
        });
        CollectionView.attachTo(this.select('weekendContainer'), {
          engine: this.tubeWeekendEngine
        });
        this.reload();
      });
    }

    return defineComponent(tube, WithTabs, WithReload);

  });
