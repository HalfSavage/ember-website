import Forums from 'appkit/routes/forums';

var route;
module("Unit - ForumsRoute",{
  setup: function(){
    var container = isolatedContainer([
      'route:forums'
    ]);
    route = container.lookup('route:forums');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Forums);
});

test("#model", function(){
  visit('/forums').then(function(){
    deepEqual(route.model(),[{id:1,
    title:"Taco Talk",
    slug:"taco-talk",
    topics:[1,2,3]},
    {id:2,
    title:"Burrito Stuff",
    slug:"burrito-stuff",
    topics:[4,5]},
    {id:3,
    title:"Churro Care",
    slug:"churro-care",
    topics:[6]}]);
  });
});
