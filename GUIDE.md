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

## Technologies used

There's a good explanation on the boilerplate homepage (TODO: link to deployed boilerplate)

## Why this stack?

TODO Explain functional styling and other approaches used in this boilerplate.

### Generating files

With orion-cli you can scaffold files based on your configuration that you've got.

```sh
orion generate component
```

You can create components, models, change profiles and reset the project with the console tool (see below).


### Removing default code

There's already a lot of predefined code in this boilerplate, to show you the possible functionality. However, if you want to start off with an
empty project use the provided command to get rid off all the code you don't need.

```sh
orion reset
```

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

## Other Awesome Boilerplates

- [Void](https://github.com/SachaG/Void) by Sacha Greif
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)
- [em](https://github.com/EventedMind/em) by EventedMind (Boilerplate & Scaffolding)
