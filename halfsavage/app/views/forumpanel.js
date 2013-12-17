var ForumPanelView = Em.View.extend({
  setupSortable:function(){
    Em.Logger.log('setup sortable');
    //this.$('#forumlist').sortable();
    //this.$('#draggableforumlist')
  }.on('didInsertElement')
});

export default ForumPanelView;
