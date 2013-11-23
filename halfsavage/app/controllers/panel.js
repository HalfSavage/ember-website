export default Ember.ObjectController.extend({
  needs:'notifications',
  notificationCount: function(){
    return this.get('controllers.notifications').get('length');
  }.property(),
  actions:{
    open:function(param){
      //console.log('open',param);
      param.toggleProperty('isClosed');
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
