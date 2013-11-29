var Message = DS.Model.extend({
  from: DS.attr(),
  date: DS.attr(),
  text: DS.attr()
});


Message.FIXTURES = [
  {
    id:1,
    from:"bob",
    date:'20131110',
    text:"Hello there."
  },
  {
    id:2,
    from:"joe",
    date:'20131101',
    text:"Howdy there."
  },
  {
    id:3,
    from:"fred",
    date:'20130110',
    text:"Sup bro there."
  }
];

export default Message;
