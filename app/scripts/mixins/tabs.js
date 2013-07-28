define([], function() {

  function withTabs() {

    this.defaultAttrs({
      toggle: '.toggle li',
      widgets: '.tabs'
    });

    this.tabs = function(event) {
      var clickedElement = event.target;
      this.select('toggle').removeClass('selected');
      $(clickedElement).addClass('selected');
      var targetElement = $('#' + clickedElement.dataset.toggle);
      this.select('widgets').hide();
      targetElement.show();
    };

    this.after('initialize', function () {
      this.on('click', {
        toggle: this.tabs
      });
    });

  }

  return withTabs;

});
