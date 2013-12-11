var MembersController = Em.ArrayController.extend({
  itemController:'member',
  sortProperties: ['username','lastName'],
  sortAscending: true
});

export default MembersController;
