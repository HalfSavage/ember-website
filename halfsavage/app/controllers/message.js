/* global
  moment
*/
var MessageController = Em.ObjectController.extend({
  days: function(){
    return moment(moment()).diff(moment(this.get('date'),'YYYYMMDD'),'days');
  }.property('date'),
  dayText:function(){
    return this.get('days')+ (this.get('days') > 1 ? ' days' : ' day');
  }.property('days')
});

export default MessageController;
