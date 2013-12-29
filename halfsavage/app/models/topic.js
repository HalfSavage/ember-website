var Topic = DS.Model.extend({
  title: DS.attr(),
  posts: DS.hasMany('post',{async:true, embedded:'ids'}),
  favorites: DS.attr(),
  datePosted: DS.attr(),
  postedBy: DS.belongsTo('member'),
  firstPost: DS.belongsTo('post'),
  forum: DS.belongsTo('forum'),
  slug: function(){
    var title = this.get('title') || "";
    return title.toLowerCase().dasherize();
  }.property('title')
});

export default Topic;
