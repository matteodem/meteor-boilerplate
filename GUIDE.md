# Guide

## Installing with orion-cli

```bash
npm install -g orion-cli
```

This will install the [orion-cli](https://github.com/matteodem/orion-cli) tool, which can be used for scaffolding files with different profiles.
You can still clone the repository, which doesn't give you the profile and scaffolding support.

## How to use

```sh
npm install -g orion-cli
# Assuming meteor is already installed
orion create appName
cd appName && meteor
```

### Generating files

With orion-cli you can scaffold files based on your configuration that you've got.

```sh
orion generate routes
```

You can create components, models, change profiles and reset the project with the console tool (see below).


### Removing default code

There's already a lot of predefined code in this boilerplate, to show you the possible functionality. However, if you want to start off with an
empty project use the provided command to get rid off all the code you don't need.

```sh
orion reset
```

### Available profiles

* default (ES2015 Javascript)
* coffee (coffeescript, Unfancy JavaScript)

You can change your profile like that
```sh
orion set-profile
```

There will be a prompt, where you can enter __coffee__ or any other profile that you have specified. Also use the ```reset``` command to start off with blank files according to your profile.

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments. 
Have a look at the repository for more information.

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to 
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) have also been added.

## Structure

### Folder structure

```
client/ 				# Client folder
    entry.js            # Entry file for client
    stylesheets         # LESS files
	components/			# Contains all components(*)
	    common/         # General purpose html components
	    layout/         # Layout html components
universal/              # Universal folder
    model/  			# Model files, for each Meteor.Collection(*)
    routes/             # All routes(*)
private/                # Private files (e.g config, docs)
public/                 # Public files (e.g images, fonts etc)
server/					# Server folder
    entry.js            # Entry file for server
    config/             # Configuration code
    loaders/            # Loaders for fixtures, default users
```

(*) = the command line tool creates files in these folders

## Other Awesome Boilerplates

- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)
- [em](https://github.com/EventedMind/em) by EventedMind (Boilerplate & Scaffolding)

## License
This boilerplate has an MIT License, see the LICENSE.txt for more information.
