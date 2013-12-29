var Member = DS.Model.extend({
  username: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  dateOfBirth: DS.attr(),
  gender: DS.attr(),
  isActive: DS.attr(),
  isModerator: DS.attr(),
  isSuperModerator: DS.attr(),
  isBanned: DS.attr(),
  isVip: DS.attr(),
  location: DS.belongsTo('location'),
  posts: DS.hasMany('post'),
  topics: DS.hasMany('topic')
});

export default Member;

