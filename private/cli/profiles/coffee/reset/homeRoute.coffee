HomeController = RouteController.extend(
  template: 'home'
)

Router.map (->
  this.route 'HomeRoute',
    path :  '/',
    controller :  HomeController
)
