var MemberSearchController = Em.ArrayController.extend({
  needs: ['members'],
  search: '',
  arrangedContent:function(){
    var search = this.get('search').toLowerCase();
    return this.get('controllers.members').filter(function(member){
      var username = member.get('username').toLowerCase().indexOf(search) != -1;
      var firstname = member.get('firstName').toLowerCase().indexOf(search) != -1;
      var lastname = member.get('lastName').toLowerCase().indexOf(search) != -1;
      return username || firstname || lastname;
    });
  }.property('search')
});

export default MemberSearchController;
