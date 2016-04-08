// { "path" : "universal/routes/mainRoutes.js" }
export default function () {
  FlowRouter.route('/', {
    action() {
      BlazeLayout.render('basicLayout', {
        content: 'home'
      });
    }
  });
}
