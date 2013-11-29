var HomeRoute = Em.Route.extend({
  model: function() {
    return ['__red__', '*yellow*', '## blue'];
  }
});
export default HomeRoute;
