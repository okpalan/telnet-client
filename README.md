
# Telnet Client

This is a telnet client implementation. It can be used to connect to a host and execute commands.

## Usage
```sh
 node ./node_modules/telnet-client/telnet-client.js "$1" "$2"
```
```bat
node ./node_modules/telnet-client/telnet-client.js %1 %2
```

```javascript
var telnet = require('telnet-client');
var connection = new telnet();
 
connection.on('error', function(err) {
  console.log('Connection failed:', err);
});
 
connection.on('ready', function(prompt) {
  console.log('Connection successful');
  connection.exec('ls', function(err, response) {
    console.log(response);
  });
});
 
connection.connect({
  host: 'www.google.com',
  port: 80
});

```