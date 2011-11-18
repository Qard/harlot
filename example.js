var harlot = require('harlot')
var server = new harlot(true)
server.use('log')
server.start()