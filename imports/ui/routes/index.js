import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta'
import './GlobalRoutesConfig'
import './MainRoutes'

new FlowRouterMeta(FlowRouter)
new FlowRouterTitle(FlowRouter)
