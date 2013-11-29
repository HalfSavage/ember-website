var PanelController = Em.ObjectController.extend({
  needs:['notifications','messages'],
  notificationCount: function(){
    return this.get('controllers.notifications.length');
  }.property('controllers.notifications.length'),
  messageCount: function(){
    return this.get('controllers.messages.length');
  }.property('controllers.messages.length'),
  actions:{
    close:function(param){
      this.set('menu.notifications.isClosed',true);
      this.set('menu.messages.isClosed',true);
      this.set('menu.settings.isClosed',true);
    }
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
