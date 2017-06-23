// { "path" : "imports/ui/routes/__routeName__Routes.js" }
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

// TODO: import in imports/ui/routes/index.js

FlowRouter.route('__routePath__', {
  action() {
    this.render('mainLayout', '__routeName__')
  },
})
