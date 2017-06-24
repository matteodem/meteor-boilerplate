// { "path" : "imports/publications/__modelName__Publication.js" }
import { Meteor } from 'meteor/meteor'

import __modelName__Collection from '../models/__modelName__Collection'

// TODO: import in server/index.js

Meteor.publish('__modelName__', function () {
  return __modelName__Collection.find()
})
