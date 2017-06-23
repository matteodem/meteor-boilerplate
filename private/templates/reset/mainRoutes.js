// { "path" : "imports/ui/routes/mainRoutes.js" }
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  action() {
    this.render('mainLayout', 'Home')
  },
  waitOn() {
    return import('../components/Home/HomeComponent.js')
  },
})

