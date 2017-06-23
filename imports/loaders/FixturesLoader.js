export default function (fixtures, collection) {
  fixtures.forEach((fixture) => {
    if (!collection.findOne(fixture)) {
      collection.insert(fixture)
    }
  })
}
