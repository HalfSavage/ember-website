var Post = DS.Model.extend({
  text: DS.attr(),
  postedBy: DS.belongsTo('member'),
  topics: DS.hasMany('topic')
});
export default Post;
