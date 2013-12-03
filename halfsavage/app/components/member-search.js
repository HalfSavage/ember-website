var MemberSearchComponent = Em.Component.extend({
  classNames:['navbar-text','panel'],
  search: '',
  isClosed: true,
  open: function(){
    var search = this.get('search');
    if(search.length > 0){
      this.set('isClosed',false);
    }else{
      this.set('isClosed',true);
    }
  }.observes('search')

});

export default MemberSearchComponent;
