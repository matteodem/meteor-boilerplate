// { "path" : "universal/models/__modelName__.js" }

const __modelName__ = new Mongo.Collection('__modelName__');

__modelName__.attachSchema(
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
);

// Collection2 already does schema checking
if (Meteor.isServer) {
  __modelName__.allow({
    insert : () => false,
    update : () => false,
    remove : () => false
  });
}

export default __modelName__;
