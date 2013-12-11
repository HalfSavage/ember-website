var ForumsRoute = Em.Route.extend({
  model: function() {
    return this.store.find('forum');
  }
});
export default ForumsRoute;
