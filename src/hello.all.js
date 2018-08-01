require('babel-polyfill');

// Services
// WH only include used libraries to reduce size
require('./modules/azureadv2.js');
// require('./modules/googlev3.js');
// require('./modules/dropbox.js');
// require('./modules/google.js');
// require('./modules/instagram.js');
// require('./modules/joinme.js');
// require('./modules/linkedin.js');
// require('./modules/soundcloud.js');
// require('./modules/twitter.js');
// require('./modules/vk.js');
// require('./modules/windows.js');
// require('./modules/yahoo.js');

// Environment tweaks
// WH: removed, not used
// require('./hello.phonegap.js');
// require('./hello.chromeapp.js');

// Export HelloJS
module.exports = require('./hello.js');
