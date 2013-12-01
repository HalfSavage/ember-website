import AccountController from 'appkit/controllers/account';
var ApplicationRoute = Em.Route.extend({
  model: function(){
    return testdata;
  },
  setupController: function(controller, model){
    this.controllerFor('notifications').set('model', this.store.find('notification'));
    this.controllerFor('messages').set('model', this.store.find('message'));
    this.controllerFor('members').set('model', this.store.find('member'));
    this.controllerFor('account').setProperties(model.account);
    this.controllerFor('settings').setProperties(model.settings);

  },
  renderTemplate: function(){
    this.render();
    this.render('header', { into: 'application', outlet: 'header', controller: 'header'});
    this.render('navbar', { into: 'application', outlet: 'navbar', controller: 'navbar'});
    this.render('panel', { into: 'navbar', outlet: 'panel', controller: 'panel'});
    this.render('notifications', { into: 'panel', outlet: 'notifications', controller: 'notifications'});
    this.render('messages', { into: 'panel', outlet: 'messages', controller: 'messages'});
    this.render('settings', { into: 'panel', outlet: 'settings', controller: 'settings'});
  }
});

export default ApplicationRoute;

var testdata = {
      account:{
        joinDate:'20121212',
        memberStatus:'GOLD PLATED'
      },
      settings:{
        theme:'blue'
      }
    };
