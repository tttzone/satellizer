angular.module('satellizer')
  .service('satellizer.utils', function() {
    this.camelCase = function(name) {
      return name.replace(/([\:\-\_]+(.))/g, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      });
    };

    this.parseQueryString = function(keyValue) {
      var obj = {}, key, value;
      angular.forEach((keyValue || '').split('&'), function(keyValue) {
        if (keyValue) {
          value = keyValue.split('=');
          key = decodeURIComponent(value[0]);
          obj[key] = angular.isDefined(value[1]) ? decodeURIComponent(value[1]) : true;
        }
      });
      return obj;
    };
  });
