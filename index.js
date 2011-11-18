var Hook = require('hook.io').Hook
  , util = require('util')

// Prepare harlot instance.
function Harlot (verbose) {
  this.verbose = verbose
  this.using = []
}

// Name harlots to use.
Harlot.prototype.use = function (args) {
  if (typeof args !== 'array') {
    var args = Array.prototype.slice.call(arguments)
  }
  for (var i = 0; i < args.length; i++) {
    this.using.push(args[i])
  }
  return this
}

// Start the parent harlot.
Harlot.prototype.start = function() {
  // Construct vanilla hook using hook.io.
  var harlot = new Hook({
    'name': 'harlot'
    , 'hooks': this.using
  })

  // Enable error logging.
  if (this.verbose) {
    harlot.on('error::*', console.log.bind(console))
  }

  // Start hook.
  harlot.start()
}

// Minimizes standard hook-building cruft.
Harlot.hook = function (cb) {
  function Child (options) {
    var self = this
    Hook.call(this, options)
    cb.call(this, this, options)
  }
  util.inherits(Child, Hook)
  return Child
}

// Export.
module.exports = Harlot