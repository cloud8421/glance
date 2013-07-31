define([], function() {
  'use strict';

  function withReload() {

    this.defaultAttrs({
      reload: '.reload'
    });

    this.before('setupEngine', function () {
      this.on('fetching', function () {
        this.select('reload').addClass('loading');
      });
      this.on('fetched', function () {
        this.select('reload').removeClass('loading');
      });
    });

    this.after('initialize', function () {
      this.on('click', {
        reload: this.reload
      });
    });

  }

  return withReload;

});
