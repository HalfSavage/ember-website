var PanelController = Em.ObjectController.extend({
  needs:['notifications','messages', 'membersearch'],
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
  memberSearch: Em.computed.alias('controllers.membersearch.search'),
  memberSearchMenu:{
    isClosed:true
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
  },
  init:function(){
    console.log(this.get('memberSearch.search'));
  }
});
export default PanelController;
