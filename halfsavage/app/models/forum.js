var Forum = DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  topics: DS.hasMany('topic', {async:true})
});

Forum.FIXTURES = [
  {id:1,
  title:"Taco Talk",
  slug:"taco-talk",
  topics:[1,2,3]},
  {id:2,
  title:"Burrito Stuff",
  slug:"burrito-stuff",
  topics:[4,5]},
  {id:3,
  title:"Churro Care",
  slug:"churro-care",
  topics:[6]}
];

export default Forum;
