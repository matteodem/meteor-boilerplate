__modelName__ = new Mongo.Collection('__modelName__',
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
__modelName__.allow(
  insert : -> true

  update : -> true

  remove : -> true
)
