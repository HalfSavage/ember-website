var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('home', {path:''});
  this.resource('forums', {path:'/forums'});
  this.resource('events', {path:'/events'});
});

export default Router;
