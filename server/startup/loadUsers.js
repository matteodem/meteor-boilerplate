function loadUser(user) {
    var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

    if (!userAlreadyExists) {
        Accounts.createUser(user);
    }
}

Meteor.startup(function () {
    var i,
        users = YAML.eval(Assets.getText('users.yml'));

    for (key in users) {
        loadUser(users[key]);
    }
});