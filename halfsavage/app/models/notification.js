var Notification = DS.Model.extend({
  type: DS.attr(),
  data: DS.attr(),
  viewed: DS.attr()
});

Notification.FIXTURES = [
  {
    id:1,
    data:{
      title:"replied to your thread",
      text:"some stuff happened.",
    },
    type:"reply",
    viewed:false
  },
  {
    id:2,
    data:{
      title:"things",
      text:"some things happened."
    },
    type:"reply",
    viewed:false
  },
  {
    id:3,
    data:{
      title:"such notify",
      text:"consider yourself notified."
    },
    type:"reply",
    viewed:false
  },
  {
    id:4,
    data:{
      title:"yep",
      text:"super notified, brah."
    },
    type:"reply",
    viewed:false
  }
];

export default Notification;

/*
- Replies to threads
- Profile views
- New members in area
- Comments (should maybe be in "Messages")
- "Likes" on posts, pics, etc.
*/
