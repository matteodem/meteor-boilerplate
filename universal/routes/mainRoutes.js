import { renderBasic, renderSlim } from './helpers.js';

export default function () {
  FlowRouter.route('/', {
    action: () => renderBasic('home')
  });

  FlowRouter.notFound = {
    action: () => renderSlim('notFound')
  };
}
