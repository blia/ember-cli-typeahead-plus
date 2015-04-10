/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-typeahead-plus',
  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');

  }
};
