var ForumRoute = Em.Route.extend({
  model: function(param){
    Em.Logger.log('model finding forum ',param);
    /* slug not working with fixture adapter. will revisit at a later time after
      api is in place.
    */
    //return this.store.find('forum', {slug: param.forum_slug}).then(function(data){Ember.Logger.log('data returned',data);return data;},function(){Em.Logger.log('forum model promise error');});
    return this.store.find('forum',param.forum_id);
  },
  beforeModel:function(){
    Em.Logger.log('beforemodel');
  },
  afterModel:function(model){
    Em.Logger.log('aftermodel',model.get('isLoaded'));

  },
  /*
  setupController: function(controller,model){
    controller.set('model',model);
    Em.Logger.log('forum setupcontroller',controller);
    //controller.set('topics',this.store.find('topic'));
  },*/
  serialize: function(model,params){
    Em.Logger.log('serializing forum model',model.get('slug'));//,model,params);
    return {forum_slug: model.get('slug'),forum_id:model.get('id')};
  }
});

export default ForumRoute;
