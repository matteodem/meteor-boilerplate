Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        'footer': { to: 'footer' },
        'sidebar': { to: 'sidebar' },
        'menu': { to: 'menu' }
    }
});