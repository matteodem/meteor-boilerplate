// { "path" : "models/__modelName__.next.js" }

export var __modelName__ = new Mongo.Collection('__modelName__');

__modelName__.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    createdAt: {
      type: Date
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  __modelName__.allow({
    insert : () => true,
    update : () => true,
    remove : () => true
  });
}
