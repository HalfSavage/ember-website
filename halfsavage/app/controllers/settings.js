import AccountController from 'appkit/controllers/account';
var SettingsController = Em.ObjectController.extend({
  needs:['account'],
  account:function(){
    return this.get('controllers.account');
  }.property('controllers.account'),
  theme:null
});

export default SettingsController;
