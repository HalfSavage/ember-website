var Message = DS.Model.extend({
  from: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  isUnread: DS.attr(),
  isUnarchived: DS.attr()
});

export default Message;
