AboutController = RouteController.extend({
    template: 'about'
});

Router.map(function () {
    this.route('about', {
        path :  '/about',
        controller :  AboutController,
        menu : 'main-menu',
        weight : 1
    });
});

