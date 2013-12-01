import AccountController from 'appkit/controllers/account';
var SettingsController = Em.ObjectController.extend({
  needs:['account'],
  account: Em.computed.alias('controllers.account'),
  theme:null
});

export default SettingsController;
