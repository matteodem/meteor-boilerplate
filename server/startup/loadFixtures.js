function loadFixture(fixtures, collection) {
    var i;

    for (i = 0; i < fixtures.length; i+= 1) {
        // Define your Meteor.method for inserting into the collection under /model
        collection.insert(fixtures[i]);
    }
}

Meteor.startup(function () {
    //loadFixture(Fixtures['dummyFixture'], DummyCollection);
});
