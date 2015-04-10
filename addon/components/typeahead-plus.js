import Ember from 'ember';
import layout from '../templates/components/typeahead-plus';

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    Ember.$.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  };
};

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  /**
   * @property highlight
   */
  highlight: false,
  /**
   * @property hint
   */
  hint: true,
  /**
   * @property minLength
   */
  minLength: 1,
  /**
   * @property dataSets
   */
  dataSet: null,
  initTypeAhead: function(){
      this.$('input').typeahead({
        hint: this.get('hint'),
        highlight: this.get('highlight'),
        minLength: this.get('minLength')
      },
      this.get('dataSets')[0]
    );
  }.on('didInsertElement'),
  addDataSet: function (dataSet) {
    this.set('dataSet', dataSet);
  }
});
