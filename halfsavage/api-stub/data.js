// Fixture Data
module.exports = {
  forums: [
    { id:1,
      title:"Taco Talk",
      slug:"taco-talk",
      topics:[1,2,3]
    },
    { id:2,
      title:"Burrito Stuff",
      slug:"burrito-stuff",
      topics:[4,5]
    },
    { id:3,
      title:"Churro Care",
      slug:"churro-care",
      topics:[6]
    }],
  posts: [
    { id:1,
      text:"Post 1",
      postedBy:1,
      topics:[1,2,3,4,5,6,7]
    },
    { id:2,
      text:"Post 2",
      postedBy:1,
      topics:[1,2,3,4,5,6,7]
    },
    { id:3,
      text:"Post 3",
      postedBy:3,
      topics:[1,2,3,4,5,6,7]
    },
    { id:4,
      text:"Post 4",
      postedBy:2,
      topics:[1,2,3,4,5,6,7]
    },
    { id:5,
      text:"Post 5",
      postedBy:1,
      topics:[1,2,3,4,5,6,7]
    }],
  topics:[
    { id:1,
      title:"Tacos RULE",
      posts:[1,2,3,4,5],
      favorites:1,
      datePosted:'20130203',
      postedBy:1,
      firstPost:1,
      forum:1
    },
    { id:2,
      title:"Filling help",
      posts:[1,2,3,4,5],
      favorites:4,
      datePosted:'20130430',
      postedBy:2,
      firstPost:1,
      forum:1
    },
    { id:3,
      title:"Taco town tote bags?",
      posts:[1,2,3,4,5],
      favorites:0,
      datePosted:'20130901',
      postedBy:1,
      firstPost:1,
      forum:1
    },
    { id:4,
      title:"Alternative wrappers",
      posts:[1,2,3,4,5],
      favorites:20,
      datePosted:'20130812',
      postedBy:3,
      firstPost:3,
      forum:2
    },
    { id:5,
      title:"How do you handle a burrito breach",
      posts:[1,2,3,4,5],
      favorites:1000,
      datePosted:'20131105',
      postedBy:1,
      firstPost:2,
      forum:2
    },
    { id:6,
      title:"What is the best bean",
      posts:[1,2,3,4,5],
      favorites:2,
      datePosted:'20131202',
      postedBy:1,
      firstPost:1,
      forum:2
    },
    { id:7,
      title:"Huh?",
      posts:[1,2,3,4,5],
      favorites:0,
      datePosted:'20131203',
      postedBy:2,
      firstPost:4,
      forum:2
    }],
  notifications: [
    { id:1,
      date:'20131110',
      data:{
        username:"joe",
        context:"stuff is awesome",
        text:"some stuff happened.",
      },
      type:"reply",
      isUnread:true,
      isUnarchived:true
    },
    { id:2,
      date:'20131101',
      data:{
        username:"fred",
        context:"some things happened."
      },
      type:"reply",
      isUnread:true,
      isUnarchived:true
    },
    { id:3,
      date:'20131120',
      data:{
        username:"tacomaster3000"
      },
      type:"profile",
      isUnread:true,
      isUnarchived:true
    },
    { id:4,
      date:'20131110',
      data:{
        username:"yepnope",
        item:"comment",
        context:"super notified, brah."
      },
      type:"like",
      isUnread:false,
      isUnarchived:true
    }],
  messages:[
    { id:1,
      from:"bob",
      date:'20131110',
      text:"Hello there.",
      isUnread:true,
      isUnarchived:true
    },
    { id:2,
      from:"joe",
      date:'20131101',
      text:"Howdy there.",
      isUnread:false,
      isUnarchived:true
    },
    { id:3,
      from:"fred",
      date:'20130110',
      text:"Sup bro there.",
      isUnread:false,
      isUnarchived:true
    }],
  members:[
    { id:1,
      username: 'trabus',
      firstName: 'Jake',
      lastName: 'Bixby',
      dateOfBirth: '19780430',
      gender: 'male',
      isActive: true,
      isModerator: false,
      isSuperModerator: false,
      isBanned: false,
      isVip: false,
      location:1
    },
    { id:2,
      username: 'sparkledonkey',
      firstName: 'Jen',
      lastName: 'Bixby',
      dateOfBirth: '19781124',
      gender: 'femal',
      isActive: true,
      isModerator: true,
      isSuperModerator: false,
      isBanned: false,
      isVip: false,
      location:1
    },
    { id:3,
      username: 'JayBOO',
      firstName: 'John',
      lastName: 'Rose',
      dateOfBirth: '19760603',
      gender: 'hobo',
      isActive: true,
      isModerator: false,
      isSuperModerator: false,
      isBanned: false,
      isVip: false,
      location:1
    }]
};
