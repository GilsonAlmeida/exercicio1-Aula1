(function(app) {
  var Component = ng.core.Component;
  var ClockService = app.ClockService;

  app.RandomClockComponent = Component({
    selector: 'hora-atual',
    template: '<p>{{clock}}</p>'
  })
  .Class({
    constructor: [ClockService, function RandomClockComponent(clockService) {
      var self = this;
      clockService.generateRandomClock(1000, function(clock) {
        self.clock = clock;
      });
    }]
  });

})(window.app || (window.app = {}));
