export default Ember.Route.extend({
  model: function() {
    return ['__red__', '*yellow*', '## blue'];
  }
});
