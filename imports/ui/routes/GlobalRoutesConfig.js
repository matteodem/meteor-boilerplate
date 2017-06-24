import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.globals.push({
  meta: {
    viewport: {
      name: 'viewport',
      content() {
        return 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
    },
  },
})
