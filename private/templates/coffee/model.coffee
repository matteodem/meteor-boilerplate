# { "path" : "models/__modelName__.coffee" }
root = exports ? this

root.__modelName__ = new Mongo.Collection '__modelName__'

root.__modelName__.attachSchema(
  new SimpleSchema(
    title:
      type: String

    content:
      type: String

    createdAt:
      type: Date
  )
)

# Collection2 already does schema checking
# Add custom permission rules if needed
root.__modelName__.allow(
  insert : -> true

  update : -> true

  remove : -> true
)
