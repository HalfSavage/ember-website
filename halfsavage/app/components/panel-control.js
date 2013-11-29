var PanelControlComponent = Em.Component.extend({
  classNames:['navbar-text','panel'],
  actions:{
    open:function(){
      if(this.get('data.isClosed')){
        this.sendAction();
      }
      this.toggleProperty('data.isClosed');
    }
  },
  action:'close'
});

export default PanelControlComponent;
