// { "path" : "universal/routes/__routeName__Routes.js" }
import { renderBasic, renderSlim } from './helpers.js';

// TODO: call this in entry file
export default function () {
  FlowRouter.route('__routePath__', {
    action: () => renderBasic('__routeName__')
  });
}
