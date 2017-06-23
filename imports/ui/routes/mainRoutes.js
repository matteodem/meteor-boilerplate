import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  title: 'Boilerplate Home',
  action() {
    this.render('mainLayout', 'home')
  },
  waitOn() {
    return [
      import('../components/layout/main.html'),
      import('../components/home/HomeComponent.js'),
    ]
  },
})
