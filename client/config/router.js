Router.configure({
    layoutTemplate: 'basicLayout',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        'footer': { to: 'footer' }
    }
});