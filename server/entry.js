import setupBrowserPolicy from './config/security.js';
import loadFixtures from './loaders/fixtures.js';
import loadUsers from './loaders/users.js';

setupBrowserPolicy(BrowserPolicy);

Meteor.startup(() => {
  //loadFixtures();
  //loadUsers();
});
