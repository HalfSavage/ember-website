export default Ember.Route.extend({
    renderTemplate: function(){
    this.render();
    this.render('header', { into: 'application', outlet: 'header', controller: 'header'});
    this.render('navbar', { into: 'application', outlet: 'navbar', controller: 'navbar'});
    this.render('panel', { into: 'navbar', outlet: 'panel', controller: 'panel'});
  }
});
