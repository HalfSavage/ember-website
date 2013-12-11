var SidePanelComponent = Em.Component.extend({
  actions:{
    open:function(){
      this.toggleProperty('isClosed');
    }
  }
});

export default SidePanelComponent;
