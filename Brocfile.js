module.exports = 'public';

// Pulls in the 'Merge' function with NPM
var Merge = require('broccoli-merge-trees');

module.exports = Merge(['public', 'bower_components/normalize-css', 'bower_components/font-awesome'], {overwrite: true});
