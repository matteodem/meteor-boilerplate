# meteor-boilerplate

This boilerplate is here to give you a starting point for your meteor projects, with a console tool to ease up some tasks. Here's what you get with it.

<!-- toc -->

* [Installing with orion-cli](#installing-with-orion-cli)
* [How to use](#how-to-use)
  * [Generating files](#generating-files)
  * [Removing default code](#removing-default-code)
  * [Available profiles (cofeescript and es6)](#available-profiles-cofeescript-and-es6)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Other Awesome Boilerplates](#other-awesome-boilerplates)
* [License](#license)

<!-- toc stop -->

The boilerplate looks like following: [boilerplate.meteor.com](http://boilerplate.meteor.com). Have a look at [starthacking](http://starthacking.meteor.com/) for a project created with this boilerplate.

## Installing with orion-cli

```bash
npm install -g orion-cli
```

This will install the [orion-cli](https://github.com/matteodem/orion-cli) tool, which can be used for scaffolding files with different profiles.
You can still clone the repository, which doesn't give you the profile and scaffolding support.

## How to use

```sh
# Assuming meteor is already installed
orion create appName
cd appName && meteor
```

### Generating files

With orion-cli you can scaffold files based on your configuration that you've got.

```sh
orion generate routes
```

You can create models, views, change profiles and reset the project with the console tool (see below).


### Removing default code

There's already a lot of predefined code in this boilerplate, to show you the possible functionality. However, if you want to start off with an
empty project, use the provided command to get rid off all the code you don't need.

```sh
orion reset
```

### Available profiles (cofeescript and es6)

* coffee (coffeescript, Unfancy JavaScript)
* es6 (traceur, Traceur is a JavaScript.next-to-JavaScript-of-today compiler)

You can change your profile like that
```sh
orion set-profile coffee
```

Also use the ```reset``` command to start off with blank files according to your profile.

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments. 
Have a look at the repository for more information.

### SEO and other concerns

> Meteor can not do SEO 

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. This boilerplate also adds constants under
__client/lib/constants.js__ for the app. Change SEO settings in the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to 
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and 
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

* Meteor Core
  * standard-app-packages
* Routing
  * iron:router
  * zimme:iron-router-active
* Collections
  * aldeed:collection2
  * dburles:collection-helpers
* Accounts
  * accounts-password
  * useraccounts:semantic-ui
* UI and UX
  * fastclick
  * meteorhacks:fast-render
  * natestrauser:animate-css
  * nooitaf:semantic-ui-less
* Security
  * browser-policy
  * audit-argument-checks
  * matteodem:easy-security
* SEO
  * manuelschoebel:ms-seo
* Development
  * less
  * jquery
  * underscore
  * raix:handlebar-helpers

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
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