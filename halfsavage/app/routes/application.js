import AccountController from 'appkit/controllers/account';
export default Ember.Route.extend({
  model: function(){
    return testdata;
  },
  setupController: function(controller, model){
    var notifications = this.controllerFor('notifications');
    var account = this.controllerFor('account');
    notifications.set('model', model.notifications);
    account.set('model',model.account);
    //console.log('setting notifications',notifications.get('length'));

  },
  renderTemplate: function(){
    this.render();
    this.render('header', { into: 'application', outlet: 'header', controller: 'header'});
    this.render('navbar', { into: 'application', outlet: 'navbar', controller: 'navbar'});
    this.render('panel', { into: 'navbar', outlet: 'panel', controller: 'panel'});
    this.render('notifications', { into: 'panel', outlet: 'notifications', controller: 'notifications'});
    this.render('settings', { into: 'panel', outlet: 'settings', controller: 'settings'});
  }
});
var testdata = {
      account:{
        joinDate:'20121212',
        memberStatus:'GOLD PLATED'
      },
      settings:{

      },
      notifications:[
          {
              title:"stuff",
              content:"some stuff happened."
          },
          {
              title:"things",
              content:"some things happened."
          },
          {
              title:"such notify",
              content:"consider yourself notified."
          },
          {
              title:"yep",
              content:"super notified, brah."
          }
      ],
      messages:{

      }
    };
