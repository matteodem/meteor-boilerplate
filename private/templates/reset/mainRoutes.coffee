# { "path" : "routes/mainRoutes.coffee" }

Router.route '/', ->
  this.render 'home'
  SEO.set { title: "Home - #{Meteor.App.NAME}" }
