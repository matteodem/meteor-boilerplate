import config from '../both/config.js';
import createHome from './components/home/home.js';
import createHeader from './components/header/header.js';

createHome(Template);
createHeader(Template);

// TODO: use template level session in home.js
// TODO: add asteroid, use https://atmospherejs.com/monbro/yaml-config-loader
// TODO: change orion config also update orion package

/*
 * Package configuration
 */

/*Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound'
});*/

/*SEO.config({
  title: config.NAME,
  meta: {
    'description': config.DESCRIPTION
  }
});*/
