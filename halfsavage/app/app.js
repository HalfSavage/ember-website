import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more important
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});

// reopen route class to set up default nav and header behavior
Ember.Route.reopen({
  renderTemplate: function(){
    this.render();
    this.render('header', { into: 'application', outlet: 'header', controller: 'header'});
    this.render('navbar', { into: 'application', outlet: 'navbar', controller: 'navbar'});
  }
});

export default App;
