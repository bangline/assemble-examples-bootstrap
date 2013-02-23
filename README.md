<a href="http://getbootstrap.com">
  <img src="http://twitter.github.com/bootstrap/assets/img/bootstrap-docs-readme.png" width="100px">
</a>


## THIS DOESN'T WORK YET, SO DON'T TRY TO USE IT!!!

We're adding an engine to [Assemble]([assemble) to compile `liquid` so that you can just drop this in as a replacement to Jekyll and stay compatible with future versions of Bootstrap. If this sounds interesting to you, make sure you star the repo to stay updated on when it's ready.


# [Assemble Bootstrap v3.0.0](assemble-bootstrap) [![Build Status](https://secure.travis-ci.org/assemble/assemble-bootstrap.png)](http://travis-ci.org/assemble/assemble-bootstrap)

**Bootstrap** is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat).

To get started with Bootstrap, checkout [http://getbootstrap.com](http://getbootstrap.com)!



**Assemble** _makes you faster at launching web projects_, using only basic HTML and CSS, or get more advanced with UI components, project scaffolds, client-side templates, mock-data, CSS pre-processors, markdown, YAML, JSON, sensible configuration defaults and a Grunt.js build system to make it work. Created and maintained by [Brian Woodward](http://twitter.com/doowb) and [Jon Schlinkert](http://twitter.com/jonschlinkert).

To get started with Assemble, checkout [http://github.com/assemble/assemble]([assemble)!


## Quick start

Three quick start options are available:

* [Download the latest release](http://github.com/assemble/assemble-bootstrap/zipball/master).
* Clone the repo: `git clone git://github.com/assemble/assemble-bootstrap.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install bootstrap`.

Read the [Getting Started page](http://getbootstrap.com/getting-started/) for information on the framework contents, basic template guidelines, and more.



## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](http://github.com/assemble/assemble-bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).



## Documentation

Assemble replaces Jekyll for building Bootstrap's docs, so there is no need to run a server to view the docs.


## Task Options & Configuration

Read Assemble's [Getting Started page](https://github.com/assemble/assemble/wiki/getting-started/) for information on using configuration files, templates, scaffolds, themes, and more.


``` js
assemble: {
  options: {
    data: ['config/bootstrap.json', 'config/defaults.json']
  },
  files: {
    'dest': ['src/files/*.hbs']
  }
}
```

#### data - `bootstrap.json`
Contains metadata from Bootstrap's `package.json` (since assemble-bootstrap uses its own package.json), as well as a few additional configuration defaults for this project.

####





## Compiling CSS and JavaScript

`assemble-bootstrap` includes a [Gruntfile](Gruntfile) with convenient tasks for working with the framework. Before getting started, be sure to install [the necessary local dependencies](package.json):


```
$ npm install
```

When completed, you'll be able to run the various grunt commands provided:

#### build - `grunt`
Runs the recess compiler to rebuild the `/less` files and compiles the docs. Requires recess and uglify-js.

#### test - `grunt test`
Runs jshint and qunit tests headlessly in [phantomjs](http://code.google.com/p/phantomjs/) (used for ci). Depends on having `grunt-contrib-jshint` installed.

#### watch - `grunt watch`
This is a convenience task for watching just Less files and automatically building them whenever you save. Requires the `grunt-contrib-less` Grunt plugin.

Should you encounter problems with installing dependencies or running the Gruntfile commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.


### Grunt Tasks

Gruntfile runs the following tasks:

  * `assemble`
  * `jshint`
  * `less` / `recess`
  * `copy`


## Contributing

Please submit all pull requests against *-wip branches. If your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).



## Community

Keep track of development and community news.

* Follow [@twbootstrap on Twitter](http://twitter.com/twbootstrap).
* Read and subscribe to the [The Official Twitter Bootstrap Blog](http://blog.getbootstrap.com).
* Have a question that's not a feature request or bug report? [Ask on the mailing list.](http://groups.google.com/group/twitter-bootstrap)
* Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##twitter-bootstrap` channel.



## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit [http://semver.org/](http://semver.org/).



## Authors

**Mark Otto**

+ [http://twitter.com/mdo](http://twitter.com/mdo)
+ [http://github.com/mdo](http://github.com/mdo)

**Jacob Thornton**

+ [http://twitter.com/fat](http://twitter.com/fat)
+ [http://github.com/fat](http://github.com/fat)



## Copyright and license

**assemble-bootstrap license**

Copyright 2012 Assemble.

  [MIT License](http://github.com/assemble/assemble-bootstrap/LICENSE-MIT)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


**Bootstrap License**

Copyright 2012 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.



[assemble-bootstrap]: http://github.com/assemble/assemble-bootstrap
[assemble]: http://github.com/assemble/assemble