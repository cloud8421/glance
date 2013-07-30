define([
    '../../bower_components/flight/lib/component',
    'engines/news',
    'components/base/collection-view',
    'mixins/tabs',
    'mixins/reload'
  ], function (
    defineComponent,
    NewsEngine,
    News,
    WithTabs,
    WithReload
  ) {
    'use strict';

    function news() {

      this.defaultAttrs({
        ukNews: '#news-uk .news',
        itaNews: '#news-ita .news'
      });

      this.reload = function() {
        this.ukNewsEngine.fetch();
        this.itaNewsEngine.fetch();
      };

      this.after('initialize', function () {
        this.ukNewsEngine = new NewsEngine({
          type: 'uk'
        });
        this.itaNewsEngine = new NewsEngine({
          type: 'ita'
        });
        News.attachTo(this.select('ukNews'), {
          engine: this.ukNewsEngine
        });
        News.attachTo(this.select('itaNews'), {
          engine: this.itaNewsEngine
        });
        this.reload();
      });
    }

    return defineComponent(news, WithTabs, WithReload);

  });
