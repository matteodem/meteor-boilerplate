var HomeController = RouteController.extend({
    template: 'home'
});

Router.map(function () {
    this.route('home', {
        path :  '/',
        controller :  HomeController,
        menu : 'main-menu',
        weight : 0
    });
});

