var TopicController = Em.ObjectController.extend({
  daysAgo: function(){
    return 1;
  }.property('datePosted'),
  postText: function(){
    console.log('posttext',this.get('posts').get('length'));
    var first = this.get('posts').get('firstObject');
    return first ? first.get('text') : '';
  }.property('posts'),
  postedByText: function(){
    var memberid = this.get('postedBy');
    var member = this.store.find('member',memberid);
    console.log('memberid',memberid,member);
    return member.get('username');
  }.property('postedBy')
});

export default TopicController;
