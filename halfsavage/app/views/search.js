/**
Input for search. focusin toggles panel visibility
*/
var SearchView = Em.TextField.extend({
  toggleOnFocus:function(){
    this.sendAction();
  }.on('change')
});
export default SearchView;
