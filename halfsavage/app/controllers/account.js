var AccountController = Em.ObjectController.extend({
  membershipInDays:function(){
    var moment = window.moment;
    return moment(moment()).diff(moment(this.get('joinDate'),"YYYYMMDD"),'days');
  }.property('joinDate'),
  joinDate:null,
  memberStatus:null
});

export default AccountController;
