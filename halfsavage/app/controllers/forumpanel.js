var ForumPanelController = Em.ObjectController.extend({
  needs:['forums'],
  forums: Em.computed.alias('controllers.forums')
});

export default ForumPanelController;
