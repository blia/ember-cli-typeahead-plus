export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.Handlebars.registerBoundHelper('data-set', function(value, options) {
    var engine = new Bloodhound({
      local: options.hash.local.map(function (v) {
        return {value:v}
      }),
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
    });
    engine.initialize();
    this.get('parentView').addDataSet({
      name: value,
      source: engine.ttAdapter()
    })
  });
}

export default {
  name: 'ember-typeahead',
  initialize: initialize
};
