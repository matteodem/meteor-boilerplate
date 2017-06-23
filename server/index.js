import { Meteor } from 'meteor/meteor'

import '../imports/config/SecurityConfig.js'
import loadUsers from '../imports/loaders/UsersLoader.js'
//import loadFixtures from '../imports/loaders/FixturesLoader.js'

Meteor.startup(() => {
  loadUsers()
  //loadFixtures([{ foo: 'bar' }], myCollection)
})
