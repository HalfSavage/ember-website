
export default DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    Em.Logger.log('queryfixtures',query);
    var fixtures = records.filter(function(record) {
      for(var key in query) {
        if (!query.hasOwnProperty(key)) { continue; }
        var value = query[key];
        Em.Logger.log('record',record[key],value);
        if (record[key] !== value) { return false; }
      }
      return true;
    });
    Em.Logger.log('fixtures',fixtures);
    return fixtures;
  }
  //simulateRemoteResponse:false
});
