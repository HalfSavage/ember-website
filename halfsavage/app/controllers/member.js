var MemberController = Em.ObjectController.extend({
  age: function(){
    return moment(moment()).diff(moment(this.get('dateOfBirth'),'YYYYMMDD'),'years');
  }.property('dateOfBirth'),
  genderShort: function(){
    return this.get('gender').substr(0,1);
  }.property('gender')
});
export default MemberController;
