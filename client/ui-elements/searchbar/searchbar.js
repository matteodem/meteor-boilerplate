Template.searchbar.helpers({
    'foundSite' : function () {
        var i,
            foundRoutes = [],
            allRoutes = Router.routes,
            searchString = Session.get('searchforSites');

        if (searchString && searchString.length > 0) {
            for (i = 0; i < allRoutes.length; i += 1) {
                if (allRoutes[i].name.indexOf(searchString) > -1) {
                    foundRoutes.push(allRoutes[i]);
                }
            }
        }

        return foundRoutes;
    }
});

Template.searchbar.events({
    'keyup #globalSearchbar' : function (e) {
        Session.set('searchforSites', $(e.target).val());
    }
});
