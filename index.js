/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-typeahead-plus',

  blueprintsPath: function blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');

  }
};
