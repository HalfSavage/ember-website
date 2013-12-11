var ApplicationRoute = Em.Route.extend({
  model: function(){
    return testdata;
  },
  setupController: function(controller, model){
    Em.Logger.log('application setupController');
    this.controllerFor('notifications').set('model', this.store.find('notification'));
    this.controllerFor('messages').set('model', this.store.find('message'));
    this.controllerFor('members').set('model', this.store.find('member'));
    this.controllerFor('forums').set('model', this.store.find('forum'));
    this.controllerFor('topics').set('model', this.store.find('topic'));
    this.controllerFor('account').setProperties(model.account);
    this.controllerFor('settings').setProperties(model.settings);

  },

/**
  Several named outlets in use
*/
  renderTemplate: function(){
    this.render();
    // header and navbar
    this.render('header', { into: 'application', outlet: 'header', controller: 'header'});
    this.render('navbar', { into: 'application', outlet: 'navbar', controller: 'navbar'});

    // navpanel and sub-items
    this.render('panel', { into: 'navbar', outlet: 'panel', controller: 'panel'});
    this.render('notifications', { into: 'panel', outlet: 'notifications', controller: 'notifications'});
    this.render('messages', { into: 'panel', outlet: 'messages', controller: 'messages'});
    this.render('settings', { into: 'panel', outlet: 'settings', controller: 'settings'});
    this.render('membersearch', { into: 'panel', outlet: 'membersearch', controller: 'membersearch'});

    // forum panel
    this.render('forumpanel', { into: 'application', outlet: 'sidepanel', controller: 'forumpanel'});
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

