Router.configure({
    layout: 'layout',
    // Doesn't work?
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    renderTemplates: {
        'footer': { to: 'footer' },
        'sidebar': { to: 'sidebar' }
    }
});

Router.map(function() {
    this.route('default',  { path: '/' });
    this.route('about',    { path: '/about' });
    // Little hack to fake the 404
    this.route('notFound', { path: '*' });
});