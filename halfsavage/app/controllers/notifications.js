var NotificationsController = Em.ArrayController.extend({
  itemController:'notification',
  unreadCount: function(){
    var count = this.filter(function(notification) {
      console.log('notification isviewed',notification.get('isUnread'));
      return notification.get('isUnread') && notification.get('isUnarchived');
    });
    return count.get('length');
  }.property('@each.isUnread', '@each.isUnarchived'),
  hasNotifications: function(){
    var count = this.filter(function(message){
      return message.get('isUnarchived');
    });
    console.log('messagecount',count.get('length'));
    return count.get('length') > 0;
  }.property('@each.isUnarchived')
});
export default NotificationsController;
