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

FlowRouter.notFound = {
  title: '404: Page not found',
  action() {
    this.render('mainLayout', 'notFound')
  },
  waitOn() {
    return [
      import('../components/layout/main.html'),
      import('../components/notFound/NotFoundComponent.html'),
    ]
  },
}
