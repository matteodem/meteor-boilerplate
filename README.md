# meteor-boilerplate

This boilerplate is here to give you a starting point for your meteor projects, with a console tool to ease up some tasks. Here's what you get with it.

* meteor-boilerplate console tool, for scaffolding files and more
* Essential atmosphere packages included, like [Iron Router](https://github.com/EventedMind/iron-router)
* Profile support for ES6 and Coffeescript

The boilerplate looks like following: [boilerplate.meteor.com](http://boilerplate.meteor.com). Have a look at [starthacking](http://starthacking.meteor.com/) for a project created with this boilerplate.

## How to install

First, [download](https://github.com/matteodem/meteor-boilerplate/zipball/master) and unpack the boilerplate archive.
```sh
# Assuming meteor is already installed
cd /path/to/project/
meteor
```

## How to use
```sh
node meteor-boilerplate # Lists all possible commands
node meteor-boilerplate create:module # Interactive console for command
node meteor-boilerplate create:module loginBox # Executes it immediately
```

### Removing default code

There's already a lot of predefined code in this boilerplate, to show you the possible functionality. However, if you want to start off with an
empty project, use the provided command to get rid off all the code you don't need.

```sh
node meteor-boilerplate reset:project
```

### Available profiles

* coffee (coffeescript, Unfancy JavaScript)
* es6 (traceur, Traceur is a JavaScript.next-to-JavaScript-of-today compiler)

You can change your profile like that
```sh
node meteor-boilerplate change:profile coffee
```

Also use the ```reset:project``` command to start off with blank files according to your profile.

### Deployments

Support for [Meteor Up](https://github.com/arunoda/meteor-up) is integrated, use following commands to set up your deployment process.

```sh
node meteor-boilerplate mup:init # walks you through the setup process
node meteor-boilerplate mup:deploy # deploys to server
```

### Packages used

[Following packages](https://github.com/matteodem/meteor-boilerplate/blob/master/.meteor/packages) are used, some of them are:

* iron:router
* aldeed:collection2
* less
* jquery
* underscore
* nooitaf:semantic-ui-less
* accounts-password & accounts-ui

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    subscriptions/      # Collection subscriptions(*)
    modules/            # Meant for components, such as form and more(*)
	views/			    # Contains all views(*)
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
meteor-boilerplate		# Command line tool
```

(*) = the command line tool creates files in these folders

## Other Awesome Boilerplates

- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)
- [em](https://github.com/EventedMind/em) by EventedMind (Boilerplate & Scaffolding)

## License
This boilerplate has an MIT License, see the LICENSE.txt for more information.
