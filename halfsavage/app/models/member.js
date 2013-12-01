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
  location: DS.belongsTo('location')
});

Member.FIXTURES = [
  {
    id:1,
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
  {
    id:2,
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
  {
    id:3,
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
  }

];

export default Member;

