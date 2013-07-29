define([
    '../../bower_components/flight/lib/component',
    'engines/news',
    'components/base/collection-view',
    'mixins/tabs'
  ], function (
    defineComponent,
    NewsEngine,
    News,
    WithTabs
  ) {
    'use strict';

    function news() {

      this.defaultAttrs({
        ukNews: '#news-uk .news',
        itaNews: '#news-ita .news'
      });

      this.after('initialize', function () {
        var ukNewsEngine = new NewsEngine({
          type: 'uk'
        });
        var itaNewsEngine = new NewsEngine({
          type: 'ita'
        });
        News.attachTo(this.select('ukNews'), {
          engine: ukNewsEngine
        });
        News.attachTo(this.select('itaNews'), {
          engine: itaNewsEngine
        });
        ukNewsEngine.fetch();
        itaNewsEngine.fetch();
      });
    }

    return defineComponent(news, WithTabs);

  });
