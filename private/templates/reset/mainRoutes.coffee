# { "path" : "universal/routes/mainRoutes.coffee" }

FlowRoute.route '/', ->
  this.render 'home'
  SEO.set { title: "Home - #{Meteor.App.NAME}" }
