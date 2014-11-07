# { "path" : "server/publications/__modelName__Pub.coffee" }
root = exports ? this

root.__modelName__ = new Mongo.Collection('__modelName__',
  schema: new SimpleSchema(
    title:
      type: String

    content:
      type: String

    createdAt:
      type: Date,
      denyUpdate: true
  )
)

# Collection2 already does schema checking
# Add custom permission rules if needed
root.__modelName__.allow(
  insert : -> true

  update : -> true

  remove : -> true
)
