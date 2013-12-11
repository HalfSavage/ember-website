var Post = DS.Model.extend({
  text: DS.attr(),
  topics: DS.hasMany('topic')
});

Post.FIXTURES = [
  {id:1,
    text:"Post 1",
    topics:[1,2,3,4,5,6,7]
  },
  {id:2,
    text:"Post 2",
    topics:[1,2,3,4,5,6,7]
  },
  {id:3,
    text:"Post 3",
    topics:[1,2,3,4,5,6,7]
  },
  {id:4,
    text:"Post 4",
    topics:[1,2,3,4,5,6,7]
  },
  {id:5,
    text:"Post 5",
    topics:[1,2,3,4,5,6,7]
  }
];

export default Post;
