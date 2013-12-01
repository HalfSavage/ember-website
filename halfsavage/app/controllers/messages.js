var MessagesController = Em.ArrayController.extend({
  itemController:'message',
  unreadCount: function(){
    var count = this.filter(function(message) {
      return message.get('isUnread') && message.get('isUnarchived');
    });
    return count.get('length');
  }.property('@each.isUnread', '@each.isUnarchived'),
  hasMessages: function(){
    var count = this.filter(function(message){
      return message.get('isUnarchived');
    });
    console.log('messagecount',count.get('length'));
    return count.get('length') > 0;
  }.property('@each.isUnarchived')
});

export default MessagesController;
