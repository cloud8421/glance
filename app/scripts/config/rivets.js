define(['rivets', 'moment'], function (rivets, moment) {
  'use strict';

  rivets.adapters[':'] = {
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
  };

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
  };

  rivets.formatters.toClimacon = function (value) {
    var state = {
      'clear-day': 'sun',
      'clear-night': 'moon',
      'rain': 'rain sun',
      'snow': 'flurries',
      'sleet': 'hail',
      'wind': 'wind',
      'fog': 'haze',
      'cloudy': 'cloud',
      'partly-cloudy-day': 'cloud sun',
      'partly-cloudy-night': 'cloud moon'
    }[value];
    return 'climacon ' + state;
  };

  return rivets;
});
