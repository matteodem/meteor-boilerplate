# { "path" : "routes/__routeName__Route.coffee" }
FlowRouter.route '__routePath__', {
  action: -> BlazeLayout.render 'basicLayout', { content: '__routeName__' }
}
