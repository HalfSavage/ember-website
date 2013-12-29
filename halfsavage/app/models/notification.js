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

export default Notification;

/*
- Replies to threads
- Profile views
- New members in area
- Comments (should maybe be in "Messages")
- "Likes" on posts, pics, etc.
*/
