var MessageView = Ember.View.extend({
  templateName:'message',
  addToolTips:function(){
    this.$('.mark-as-read').tooltip();
    console.log('messages inserted');
  }.on('didInsertElement')
});

export default MessageView;
