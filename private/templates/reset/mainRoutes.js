// { "path" : "routes/mainRoutes.js" }
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
