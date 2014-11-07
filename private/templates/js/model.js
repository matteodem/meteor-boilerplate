// { "path" : "models/__modelName__.js" }
__modelName__ = new Mongo.Collection('__modelName__'/*, {
  schema: new SimpleSchema({
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
}*/);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  __modelName__.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
