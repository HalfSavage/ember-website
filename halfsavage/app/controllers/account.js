export default Ember.ObjectController.extend({
  membershipInDays:function(){
    var moment = window.moment;
    var d = this.get('joinDate');
    var days = moment(moment()).diff(moment(d,"YYYYMMDD"),'days');
    console.log('d');
    return days;
  }.property('joinDate'),
  joinDate:null,
  memberStatus:null
});
