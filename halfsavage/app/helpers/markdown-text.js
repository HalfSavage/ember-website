export default Ember.Handlebars.makeBoundHelper(function(value) {
    var converter = new Showdown.converter();
    var input = value || "";
    return new Ember.Handlebars.SafeString(converter.makeHtml(input));
});

