export default function (Template) {
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
        { 'name' : 'Flow Router', 'path' : 'https://github.com/kadirahq/flow-router' },
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
        { 'command' : 'component', 'description' : 'Creates a component under client/components with html, less and javascript files.' },
        { 'command' : 'layout', 'description' : 'Creates a layout component which yields your content, used by iron-router' },
        { 'command' : 'common', 'description' : 'Creates a simple html component under client/components/common' },
        { 'command' : 'routes', 'description' : 'Creates a group of routes under routes/' },
        { 'command' : 'model', 'description' : 'Creates a model with files in model/, client/subscriptions and server/publications' },
        { 'command' : 'less', 'description' : 'Creates a less stylesheet in client/stylesheets' }
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
        { 'root' : 'client', 'children' : ['stylesheets', 'components'] },
        { 'root' : 'universal', 'children': ['models', 'routes'] },
        { 'root' : 'private' },
        { 'root' : 'server', 'children' : ['config', 'loaders'] },
        { 'root' : 'public' }
      ];
    }
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
}
