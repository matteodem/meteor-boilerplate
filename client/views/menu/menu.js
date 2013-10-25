function routesByWeight(routes) {
    var i,
        sortedRoutes = [],
        noWeightRoutes = [];

    for (i = 0; i < routes.length; i += 1) if (routes[i].options.menu == "main-menu") {
        var route = routes[i],
            routeInfo = route.options;

        if (routeInfo && typeof routeInfo.weight == 'number' && typeof sortedRoutes[routeInfo.weight] == 'undefined') {
            sortedRoutes[routeInfo.weight] = route;
        } else {
            noWeightRoutes.push(route);
        }
    }

    for (i = 0; i < noWeightRoutes.length; i += 1) {
        sortedRoutes.push(noWeightRoutes[i]);
    }

    return sortedRoutes;
}

Template.menu.helpers({
    'route' : function () {
        return routesByWeight(Router.routes);
    },
    'menuName' : function () {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
    'isActive' : function () {
        var siteName = this.name,
            current = Router.current();

        if ('undefined' !== typeof current && current !== null) {
            return current.route.name == siteName ? 'active' : 'not-active';
        }
    }
});

Template.menu.events({
});

