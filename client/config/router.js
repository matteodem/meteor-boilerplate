Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    yieldTemplates: {
        'footer': { to: 'footer' },
        'sidebar': { to: 'sidebar' },
        'menu': { to: 'menu' }
    }
});