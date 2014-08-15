# meteor-boilerplate

This boilerplate is here to give you a structure for typical meteor projects, with a console tool to ease up some tasks.
Here's what the boilerplate looks like: [boilerplate.meteor.com](http://boilerplate.meteor.com)

## How to install

First, [download](https://github.com/matteodem/meteor-boilerplate/zipball/master) and unpack the boilerplate archive.
```
# Assuming meteor and meteorite are already installed
cd /path/to/project/
mrt install
meteor
```

## How to use
```
node meteor-boilerplate # Lists all possible commands
```

### Packages used

* semantic-ui
* collection2
* less
* jquery
* underscore
* handlebar-helpers
* iron-router
* iron-router-progress
* accounts-password
* accounts-ui

The "insecure" and "autopublish" packages are removed by default.

### Removing default code

There's already a lot of predefined code in this boilerplate, to show you the possible functionality. However, if you want to start off with an
empty project, use the provided command to get rid off all the code you don't need.

```bash
node meteor-boilerplate reset:project
```

### Coffeescript support

For all our coffeescript lovers, you can change to a coffeescript configuration for file generation like this.

```bash
node meteor-boilerplate change:profile coffee
```

Also use the ```reset:project``` command to start off with coffeescript files.

### Features

* Comprehensive folder structure
* TDD / BDD with [laika](http://arunoda.github.io/laika/)
* Multi page apps with [iron-router](https://github.com/EventedMind/iron-router)
* A way to load fixtures (as of now no external packages used for that)
* meteor-boilerplate console tool, which helps on creating views, routes and so on

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    routes/             # All routes(*)
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    subscriptions/      # Collection subscriptions(*)
    modules/            # Meant for components, such as form and more(*)
	views/			    # Contains all views(*)
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
tests/					# Test files, can be run with laika
meteor-boilerplate		# Command line tool
meteor-boilerplate.bat  # Command line tool for windows
```

(*) = the command line tool creates files in these folders

## Projects created with this boilerplate
[places](https://github.com/matteodem/places)

## Other Awesome Boilerplates

- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)

## License
This boilerplate has an MIT License, see the LICENSE.txt for more information.
