Handlebars.registerHelper('isActive', function (siteName) {
    var current = Router.current();

    if ('undefined' !== typeof current && current !== null) {
        return current.route.name == siteName ? 'active' : 'not-active';
    }

    return 'not-active';
});

Handlebars.registerHelper('debug', function (optionalValue) {
    if (typeof console !== "undefined" || typeof console.log !== "undefined") {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }

        return '';
    }

    // For IE8
    alert(this);

    if (optionalValue) {
        alert(optionalValue);
    }

    return '';
});
