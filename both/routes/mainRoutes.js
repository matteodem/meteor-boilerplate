// Home Route
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('basicLayout', { content: 'home', header: 'header', footer: 'footer' });
  }
});
