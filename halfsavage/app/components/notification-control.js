var NotificationControlComponent = Em.Component.extend({
  actions:{
    read:function(){
      this.toggleProperty('isUnread');
    },
    archive:function(){
      // if we're archiving it should be marked read
      this.set('isUnread',false);
      this.set('isUnarchived',false);
    }
  }
});
export default NotificationControlComponent;
