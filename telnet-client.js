var net = require('net');

function Telnet() {
  this.queue = [];
  this.connected = false;
  this.promptReceived = false;
  this.telnetSocket = new net.Socket();

  this.telnetSocket.on('data', function (data) {
    this.promptReceived = data.toString().trim().endsWith('$');

    if (this.queue.length > 0) {
      this.write(this.queue.shift());
    }
  }.bind(this));
}

Telnet.prototype.connect = function (options, callback) {
  this.telnetSocket.connect(options, function () {
    this.connected = true;
    callback();
  }.bind(this));
};

Telnet.prototype.exec = function (command, callback) {
  if (!this.connected) {
    throw new Error('Not connected');
  }

  if (this.promptReceived) {
    this.write(command, callback);
  } else {
    this.queue.push(command);
  }
};

Telnet.prototype.write = function (command, callback) {
  this.telnetSocket.write(command + '\n', function () {
    if (callback) {
      callback();
    }
  });
};

Telnet.prototype.pause = function () {
  this.telnetSocket.pause();
};

Telnet.prototype.on = function (event, callback) {
  this.telnetSocket.on(event, function () {
    callback();
  }.bind(this));
};

Telnet.prototype.end = function () {
  this.telnetSocket.end();
};

Telnet.prototype.prompt = function(prompt, callback) {
  var data = '';
 
  this.telnetSocket.on('data', function(chunk) {
    data += chunk.toString();
 
    if (data.includes(prompt)) {
      callback(data);
    }
  }.bind(this));
};
module.exports = Telnet;
