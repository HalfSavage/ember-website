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
/**
Some notes on member searching...
Because of the eventual firehose of member data that we really don't
need to keep in memory, we need to perform queries on the server
rather than pulling in all member data and searching on the client.

That makes this current approach pointless. We will need to revisit
this once we've got an active backend that we can query.

Ideally, we'll just fire off a query after typing stops for a moment.
We can keep track of the state of the query if it's mid process.

Rather than using the members controller, we should create a separate
memberSearchResult controller or something like that. Rather than using
Ember data with a model, just use the controller and pull in raw json

*/
