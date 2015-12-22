import constants from '../../../both/config.js';

export default function (Template) {
  Template.header.created = function () {
    Session.set('isActive', false);
    Session.set('showLogin', false);
  };

  Template['header'].helpers({
    showLogin: () => Session.get('showLogin'),
    isActive: () => Session.get('isActive') ? 'active' : '',
    animateClass: () => Session.get('isActive') ? 'fadeIn' : 'fadeOut',
    iconClass: () => Meteor.user() ? 'user' : 'sign in',
    constant: (what) => constants[what.toLowerCase()]
  });

  Template['header'].events({
    'click .resize.button' : () => {
      var showLogin = Session.get('showLogin');

      Session.set('isActive', !Session.get('isActive'));

      Meteor.setTimeout(() => {
        Session.set('showLogin', !Session.get('showLogin'));
      }, 600);
    },
    'click .log-out.button' : () => Meteor.logout()
  });
}
