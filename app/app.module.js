(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var ClockService = app.ClockService;
  var RandomClockComponent = app.RandomClockComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomClockComponent],
    providers: [ClockService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
