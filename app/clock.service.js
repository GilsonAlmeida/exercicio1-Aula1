(function(app) {
  var Class = ng.core.Class;

  app.ClockService = Class({
    constructor: function ClockService() {
      
    },
    getRandomClock: function() {
      data = new Date;
      return data;
    },
    generateRandomClock: function(delay, callback) {
      var self = this;
      callback(this.getRandomClock());
      setInterval(function() {
        callback(self.getRandomClock());
      }, delay);
    }
  });

  })(window.app || (window.app = {}));