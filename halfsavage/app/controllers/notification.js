var NotificationController = Em.ObjectController.extend({
  subject: function(){
    var type = this.get('type');
    var data = this.get('data');
    //if(type)
    if(data.username){
      return data.username;
    }
    return 'such';
  }.property('data','type'),
  verb: function(){
    var type = this.get('type');
    var data = this.get('data');
    if(type==='reply'){
      return ' replied to your post in "'+data.context+'"';
    }
    if(type==='profile'){
      return ' viewed your profile';
    }
    if(type==='like'){
      return ' liked your '+data.item+' in "'+data.context+'"';
    }
    return ' notification';
  }.property('data','type'),
  days: function(){
    return moment(moment()).diff(moment(this.get('date'),'YYYYMMDD'),'days');
  }.property('date'),
  dayText:function(){
    return this.get('days')+ (this.get('days') > 1 ? ' days' : ' day');
  }.property('days')
});

export default NotificationController;

/**
notifications should display in the following format
subject
verb
context
excerpt - optional
  {{#linkTo 'member' subject}}{{subject}}{{/linkTo}} {{verb}} {{context}}{{#if hasExcerpt}}:{{excerpt}}{{/if}}

*/
