var Forum = DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  topics: DS.hasMany('topic', {async:true})
});

export default Forum;
