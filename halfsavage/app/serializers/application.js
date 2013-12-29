//export default DS.JSONSerializer.extend();


export default DS.JSONSerializer.extend({
  serializeHasMany: function(record, json, relationship) {
    var key   = relationship.key,
        attrs = get(this, 'attrs'),
        embed = relationship.options.embedded == 'ids';

    if (embed) {
      json[this.keyForRelationship(key,'hasMany')] = get(record, key).mapBy(get(this, 'primaryKey'))
    }
  }
});
