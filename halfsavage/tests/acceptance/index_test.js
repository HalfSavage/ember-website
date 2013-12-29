var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(3);

  visit('/').then(function(){
    var title = find('h1#title');
    var list = find('.container .content ul li');

    equal(title.text(), 'Half Savage');

    equal(list.length, 3);
    equal(list.text(), 'redyellowblue');
  });
});
