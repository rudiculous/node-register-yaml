"use strict";

var fs = require('fs');
var yaml = require('js-yaml');

if (require.extensions) {
    require.extensions['.yaml'] = loadFile;
    require.extensions['.yml']  = loadFile;
}

function loadFile(module, filename) {
    module.exports = yaml.safeLoad(fs.readFileSync(filename, 'utf-8'));
}
