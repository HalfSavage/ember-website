export default Ember.Component.extend({
  classNames:['navbar-text','panel'],
  actions:{
    open:function(){
      this.toggleProperty('isClosed');
    }
  },
  isClosed:true
});
