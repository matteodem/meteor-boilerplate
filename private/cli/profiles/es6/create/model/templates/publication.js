Meteor.publish('__modelName__', function () {
  return __modelName__.find();
});
