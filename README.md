# Harlot
With harlot, you can remove a bunch of that extra cruft you add to every hook you write. Harlot also enforces the practice of using a vanilla parent hook. You have no access to the parent hook at all.

## Usage

    npm install harlot

## Interface

#### new Harlot(verbosity)
By setting verbosity to true, all error events will be logged to the console.

#### harlot.use(hook [, hook...])
Name or descriptive object to initialize new hook with. Accepts any number of arguments, or an array as the first argument.

#### harlot.start()
It should be obvious what this does. ;)

#### Harlot.hook(cb)
This is how you build a child hook. The callback accepts two arguments (hook, options) and handles all the construction and inheritance cruft. Note, this is directly exposed in the exports--no need for new Harlot().

## Examples

### Parent Hook

    var server = new harlot(true)
    server.use('log')
    server.start()

The parent hook api is chainable, so this works equally as well;

    new harlot(true).use('log').start()

### Child Hook

    exports.Log = harlot.hook(function (hook) {
      hook.on('hook::ready', function () {
        hook.on('*::log', function (data) {
          console.log('logging', data)
        })
      })
    })

---

### Copyright (c) 2011 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.