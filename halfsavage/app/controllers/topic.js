var TopicController = Em.ObjectController.extend({
  daysAgo: function(){
    return 1;
  }.property('datePosted'),
  postText: function(){
    Em.Logger.log('post',this.get('firstPost'));
    return this.get('firstPost.text');
  }.property('firstPost.text'),
  postedByText: function(){
    return this.get('postedBy.username');
  }.property('postedBy.username')
});

export default TopicController;
