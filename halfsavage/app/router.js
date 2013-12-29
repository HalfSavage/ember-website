var Router = Em.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('home', {path:'/home'});
  this.resource('forums', {path:'/forums'});
  // temporarily disabling slugs until api is in place
  //this.resource('forum', {path:'/forums/:forum_slug'});
  this.resource('forum', {path:'/forums/:forum_id'});
  this.resource('topic', {path:'/topics/:topic_slug/:topic_id'});
  this.resource('events', {path:'/events'});
});

export default Router;


/**

Some thoughts about the routes-
We want to have the forum-list present in most views,
except for detail view?
forums > topic-list > topic

clicking a topic from the list at
/forums/video-games/
goes to
/topics/video-game-topic-slug/:topic_id

events > event-list > event


Using slugs for url followed by id like Discourse?
/topic/one-topic-slug/:topic_id

Remember to keep the public facing url consistent with back end.
We're driving the data with the back-end, and should
be able to access it the same way directly.

Search should leverage the back-end rather than trying to
replicate on the front-end.

*/
