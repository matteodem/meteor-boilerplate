import constants from '../../../universal/config.js';

export default function (Template) {
  const dict = new ReactiveDict('header');

  Template.header.created = function () {
    dict.set('isActive', false);
    dict.set('showLogin', false);
  };

  Template['header'].helpers({
    showLogin: () => dict.get('showLogin'),
    isActive: () => dict.get('isActive') ? 'active' : '',
    animateClass: () => dict.get('isActive') ? 'fadeIn' : 'fadeOut',
    iconClass: () => Meteor.user() ? 'user' : 'sign in',
    constant: (what) => constants[what.toLowerCase()]
  });

  Template['header'].events({
    'click .resize.button' : () => {
      var showLogin = dict.get('showLogin');

      dict.set('isActive', !dict.get('isActive'));

      Meteor.setTimeout(() => {
        dict.set('showLogin', !dict.get('showLogin'));
      }, 600);
    },
    'click .log-out.button' : () => Meteor.logout()
  });
}
