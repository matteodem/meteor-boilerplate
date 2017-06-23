import setupBrowserPolicy from '../imports/config/SecurityConfig.js'
import loadFixtures from '../imports/loaders/FixturesLoader.js'
import loadUsers from '../imports/loaders/UsersLoader.js'

setupBrowserPolicy(BrowserPolicy)

Meteor.startup(() => {
  loadUsers()
  //loadFixtures([{ foo: 'bar' }], myCollection)
})
