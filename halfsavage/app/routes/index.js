var IndexRoute = Em.Route.extend({
  model: function() {
    return ['__red__', '*yellow*', '## blue'];
  }
});
export default IndexRoute;
