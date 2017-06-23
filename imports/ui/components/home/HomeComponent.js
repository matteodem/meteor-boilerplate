import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

import './HomeComponent.html'

Template.home.helpers({
  settings() {
    return Meteor.settings.public
  },
})
