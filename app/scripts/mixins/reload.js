define([], function() {
  'use strict';

  function withReload() {

    this.defaultAttrs({
      reload: '.reload'
    });

    this.after('initialize', function () {
      this.on('click', {
        reload: this.reload
      });
    });

  }

  return withReload;

});
