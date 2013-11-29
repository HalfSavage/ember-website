var HeaderController = Em.ObjectController.extend({
  style:function(){
    return 'background:url("'+this.get('background')+'") no-repeat center center fixed; background-size:cover;';
  }.property('background'),
  background:'assets/img/banner-bg.jpg'
});
export default HeaderController;
