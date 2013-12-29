var ForumsRoute = Em.Route.extend({
  model: function() {
    console.log('forums route');
    return this.store.find('forum');
  }
});
export default ForumsRoute;
