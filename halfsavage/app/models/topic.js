var Topic = DS.Model.extend({
  title: DS.attr(),
  posts: DS.hasMany('post',{async:true}),
  favorites: DS.attr(),
  datePosted: DS.attr(),
  postedBy: DS.attr(),
  forum: DS.belongsTo('forum'),
  slug: function(){
    return this.get('title').toLowerCase().dasherize();
  }.property('title')

});

Topic.FIXTURES = [
  { id:1,
    title:"Tacos RULE",
    posts:[1,2,3,4,5],
    favorites:1,
    datePosted:'20130203',
    postedBy:1,
    forum:1
  },
  { id:2,
    title:"Filling help",
    posts:[1,2,3,4,5],
    favorites:4,
    datePosted:'20130430',
    postedBy:2,
    forum:1
  },
  { id:3,
    title:"Taco town tote bags?",
    posts:[1,2,3,4,5],
    favorites:0,
    datePosted:'20130901',
    postedBy:1,
    forum:1
  },
  { id:4,
    title:"Alternative wrappers",
    posts:[1,2,3,4,5],
    favorites:20,
    datePosted:'20130812',
    postedBy:3,
    forum:2
  },
  { id:5,
    title:"How do you handle a burrito breach",
    posts:[1,2,3,4,5],
    favorites:1000,
    datePosted:'20131105',
    postedBy:1,
    forum:2
  },
  { id:6,
    title:"What is the best bean",
    posts:[1,2,3,4,5],
    favorites:2,
    datePosted:'20131202',
    postedBy:1,
    forum:2
  },
  { id:7,
    title:"Huh?",
    posts:[1,2,3,4,5],
    favorites:0,
    datePosted:'20131203',
    postedBy:2,
    forum:2
  }
];

export default Topic;
