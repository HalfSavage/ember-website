var PanelController = Em.ObjectController.extend({
  needs:['notifications','messages', 'members'],
  unreadNotificationCount: function(){
    return this.get('controllers.notifications.unreadCount');
  }.property('controllers.notifications.unreadCount'),
  unreadMessageCount: function(){
    return this.get('controllers.messages.unreadCount');
  }.property('controllers.messages.unreadCount'),
  actions:{
    close:function(param){
      this.set('menu.notifications.isClosed',true);
      this.set('menu.messages.isClosed',true);
      this.set('menu.settings.isClosed',true);
    }
  },
  search: '',
  arrangedContent: function(){

  },
  menu:{
    notifications:{
      name:'notifications',
      icon:'fa-laptop',
      isClosed:true
    },
    messages:{
      name:'messages',
      icon:'fa-envelope-o',
      isClosed:true
    },
    settings:{
      name:'',
      icon:'fa-gear',
      isClosed:true
    }
  }
});
export default PanelController;
