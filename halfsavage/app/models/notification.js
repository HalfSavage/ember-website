var Notification = DS.Model.extend({
  type: DS.attr(),
  date: DS.attr(),
  data: DS.attr(),
  isUnread: DS.attr(),
  isUnarchived: DS.attr()
});
/*
types:
  reply
  profile
  like
  comment
  new_member
*/
Notification.FIXTURES = [
  {
    id:1,
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
  {
    id:2,
    date:'20131101',
    data:{
      username:"fred",
      context:"some things happened."
    },
    type:"reply",
    isUnread:true,
    isUnarchived:true
  },
  {
    id:3,
    date:'20131120',
    data:{
      username:"tacomaster3000"
    },
    type:"profile",
    isUnread:true,
    isUnarchived:true
  },
  {
    id:4,
    date:'20131110',
    data:{
      username:"yepnope",
      item:"comment",
      context:"super notified, brah."
    },
    type:"like",
    isUnread:false,
    isUnarchived:true
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
