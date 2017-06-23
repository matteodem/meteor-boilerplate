// { "path" : "imports/models/__modelName__Collection.js" }
import { Mongo } from 'meteor/mongo'

const __modelName__Collection = new Mongo.Collection('__modelName__')

__modelName__Collection.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
)

// Collection2 already does schema checking
__modelName__Collection.allow({
  insert : () => false,
  update : () => false,
  remove : () => false
})

export default __modelName__Collection
