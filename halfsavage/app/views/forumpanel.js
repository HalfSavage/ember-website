var ForumPanelView = Em.View.extend({
  setupSortable:function(){
    Em.Logger.log('setup sortable');
    this.$('#forumlist').sortable();
  }.on('didInsertElement')
});

export default ForumPanelView;
