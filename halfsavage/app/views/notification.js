var NotificationView = Em.View.extend({
  addToolTips:function(){
    templateName: "notification",
    this.$('.mark-as-read').tooltip();
    console.log('marking tooltips')
  }.on('didInsertElement')
});

export default NotificationView;
