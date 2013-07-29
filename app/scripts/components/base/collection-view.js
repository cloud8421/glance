define([
    '../../../bower_components/flight/lib/component',
    'config/rivets'
  ], function (
    defineComponent,
    rivets
  ) {
    'use strict';

    function render(component, collection) {
      collection.on('sync', function () {
        var template = component.itemTemplate;
        var items = [];
        collection.each(function (item) {
          var clonedTemplate = $(template.clone());
          rivets.bind(clonedTemplate, { item: item });
          items.push(clonedTemplate);
        });
        component.$node.html(items);
      });
    }

    function collectionView() {

      this.defaultAttrs({
        items: 'li',
        showMoreToggle: 'li h6'
      });

      this.showMore = function (event) {
        var moreElement = $(event.target).parent().find('p');
        if (moreElement.text().length > 0) {
          moreElement.fadeToggle(100);
        }
      };

      this.after('initialize', function () {
        this.itemTemplate = this.$node.find('li').clone();
        var engine = this.attr.engine;
        render(this, engine);
        this.on('click', {
          showMoreToggle: this.showMore
        });
      });
    }

    return defineComponent(collectionView);

  });
