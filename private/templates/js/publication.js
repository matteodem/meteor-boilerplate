// { "path" : "server/publications/__modelName__.js" }
// TODO: call this in entry file
export default function () {
  Meteor.publish('__modelName__', function () {
    return __modelName__.find();
  });
}
