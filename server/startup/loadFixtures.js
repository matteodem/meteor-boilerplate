function loadFixture(fixtures, collection) {
    var i;

    for (i = 0; i < fixtures.length; i+= 1) {
        // Define your Meteor.method for inserting into the collection under /model
        Meteor.call(collection._name + '_insert', fixtures[i]);
    }
}

Meteor.startup(function () {
    //loadFixture(Fixtures['dummyFixture'], dummyCollection);
});