const users = [
  {
    username: 'admin',
    email: 'admin@test.com',
    password: 'supersecret'
  },
  {
    username: 'testuser',
    email: 'test@test.com',
    password: 'testpassword'
  }
];

export default function () {
  users.forEach(function (user) {
    if (typeof Meteor.users.findOne({ username : user.username }) !== 'object') {
      Accounts.createUser(user);
    }
  });
}
