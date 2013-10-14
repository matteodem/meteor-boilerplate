/**
 * Created with JetBrains PhpStorm.
 * User: Matteo
 * Date: 14.10.13
 * Time: 21:49
 * To change this template use File | Settings | File Templates.
 */

Handlebars.registerHelper('isActive', function (siteName) {
    var current = Router.current();

    if ('undefined' !== typeof current && current !== null) {
        return current.route.name == siteName ? 'active' : 'not-active';
    }
});
