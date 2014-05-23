var REPLACE_1_UPPERCASEController = RouteController.extend({
    template: 'REPLACE_1'
});

Router.map(function () {
    this.route('REPLACE_1', {
        path :  'REPLACE_2',
        controller :  REPLACE_1_UPPERCASEController
    });
});
