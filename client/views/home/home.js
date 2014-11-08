Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Uses trusted packages', 'icon' : 'archive', 'path' : '#packages' },
      { 'text' : 'Has a console tool', 'icon' : 'terminal', 'path' : '#console-tool' },
      { 'text' : 'Embraces HTML5', 'icon' : 'html5', 'color' : 'hover-orange', 'path' : '#html5' },
      { 'text' : 'Provides a structure', 'icon' : 'folder', 'path' : '#structure' }
    ];
  },
  'package' : function () {
    return [
      { 'name' : 'Iron Router', 'path' : 'https://github.com/EventedMind/iron-router' },
      { 'name' : 'Collection2', 'path' : 'https://github.com/aldeed/meteor-collection2' },
      { 'name' : 'Semantic UI', 'path' : 'http://semantic-ui.com/' },
      { 'name' : 'less', 'path' : 'http://lesscss.org/' },
      { 'name' : 'jQuery', 'path' : 'http://jquery.com/' },
      { 'name' : 'Underscore', 'path' : 'http://underscorejs.org/' },
      { 'name' : 'Accounts UI & Password', 'path' : 'http://docs.meteor.com/#accountsui' }
    ];
  },
  'consoleCommand' : function () {
    return [
      { 'command' : 'change:profile', 'description' : 'Change script profile to coffeescript or es6 Harmony if wished.' },
      { 'command' : 'create:view', 'description' : 'Creates a folder under client/views with html, less and javascript files.' },
      { 'command' : 'create:module', 'description' : 'Similiar to a view, but under client/modules and for re-usable components' },
      { 'command' : 'create:layout', 'description' : 'Creates a layout template which yields your content, used by iron-router' },
      { 'command' : 'create:common', 'description' : 'Creates a simple html file under client/views/common' },
      { 'command' : 'create:routes', 'description' : 'Creates a group of routes under routes/' },
      { 'command' : 'create:model', 'description' : 'Creates a model with files in model/, client/subscriptions and server/publications' },
      { 'command' : 'create:less', 'description' : 'Creates a less stylesheet in client/stylesheets' },
      { 'command' : 'create:test', 'description' : 'Creates a velocity test file under tests' },
      { 'command' : 'reset:project', 'description' : 'Removes all unnecessary files, perfect for a fresh start' }
    ];
  },
  'semanticElement' : function () {
    return [
      { 'what' : 'Large Buttons', 'withBootstrap' : 'btn btn-lg', 'withSemanticUI' : 'ui large button' },
      { 'what' : 'One column', 'withBootstrap' : 'col-md-1', 'withSemanticUI' : 'one wide column' },
      { 'what' : 'Vertical Menu / Navigation', 'withBootstrap' : 'nav nav-pills', 'withSemanticUI' : 'ui vertical menu' }

    ];
  },
  'bootstrapCode' : function () {
    return '<div class="btn btn-primary btn-lg"></div>';
  },
  'folder' : function () {
    return [
      { 'root' : 'client', 'children' :
        ['compatibility', 'config', ' lib', ' startup', ' stylesheets',
          'modules', 'views']
      },
      { 'root' : 'model' },
      { 'root' : 'routes' },
      { 'root' : 'private' },
      { 'root' : 'server', 'children' : ['fixtures', 'lib', 'publications', 'startup'] },
      { 'root' : 'public' },
      { 'root' : 'meteor-boilerplate' }
    ];
  }
});

Template.home.events({
});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
};
