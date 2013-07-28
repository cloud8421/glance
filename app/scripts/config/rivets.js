define(['rivets'], function (rivets) {
  rivets.configure({
    adapter: {
      subscribe: function(obj, keypath, callback) {
        obj.on('change:' + keypath, callback);
      },
      unsubscribe: function(obj, keypath, callback) {
        obj.off('change:' + keypath, callback);
      },
      read: function(obj, keypath) {
        return obj.get(keypath);
      },
      publish: function(obj, keypath, value) {
        obj.set(keypath, value);
      }
    }
  });

  rivets.formatters.celsius = function (value) {
    var celsius = (value  -  32) * 5/9;
    var temperatureString = Math.round(celsius) + 'º';
    return temperatureString;
  };

  rivets.formatters.parameterize = function (value) {
    return value.toLowerCase().replace(/ /g, '-');
  };

  rivets.formatters.normalize = function (value) {
    return value.replace(/\&/g, 'and');
  };

  rivets.formatters.toSimpleDate = function (value) {
    var dateFormat = 'MMMM Do, HH:mm';
    return moment(value).format(dateFormat);
  }

  return rivets;
});
