export default Ember.Controller.extend({
  needs:['account','notifications'],
  account: null,
  notifications: null
});
