Handlebars.registerHelper('isActive', function (siteName) {
    var current = Router.current();

    if ('undefined' !== typeof current && current !== null) {
        return current.route.name == siteName ? 'active' : 'not-active';
    }

    return 'not-active';
});
