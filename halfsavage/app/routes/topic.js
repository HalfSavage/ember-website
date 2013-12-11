var TopicRoute = Em.Route.extend({
  model: function(param){
    Em.Logger.log('finding forum ',param);
    return this.store.find('topic',param.topic_id);
  },
  setupController: function(controller,model){
    controller.set('model', model);
    //controller.set('forum', this.store.find('forum'));
    //controller.set('posts', this.store.find('post'));

  },
  afterModel: function(model){
    Em.Logger.log('topicAftermodel',model);
  },
  serialize: function(model){
    return {topic_slug: model.get('slug'), topic_id: model.get('id')};
  }
});

export default TopicRoute;
