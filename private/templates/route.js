var ReplaceFirstUpperCaseController = RouteController.extend({
    template: 'ReplaceFirst'
});

Router.map(function () {
    this.route('ReplaceFirst', {
        path :  'ReplaceSecond',
        controller :  ReplaceFirstUpperCaseController
    });
});
