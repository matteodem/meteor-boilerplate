# meteor-boilerplate

I created this repository because I always reconstructed a similiar directory structure when starting a new Meteorjs Project. This boilerplate has different packages that I use regularly & a little command line tool.

## How to install
```
mrt install
meteor
```

## How to use
```
./meteor-boilerplate # Lists all possible commands 
```

## What is in this boilerplate

This boilerplate doesn't have anything than a basic folder structure and pre-defined packages. The "insecure" and "autopublish" packages are removed by default.

### Folder structure

```
client/ 				# Client folder
	global/				# Global less, js and html files
		less/			# Main less file & variables
		js/				# Main javascript files
			client.js	# Client.js for global javascript stuff
			router.js	# Router definitions
		html/			# General purpose html templates
	templates/			# Contains all templates
	index.html			# Basic index.html with a {{renderPage}} for the router
model/  				# Model files, for each Meteor.Collection
server/					# Server folder
tests/					# Test files
meteor-boilerplate		# Command line tool
```

### Packages used
* less
* jQuery
* bootstrap
* Router (Smart Package)
