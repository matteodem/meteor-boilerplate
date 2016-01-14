export function renderBasic(template) {
  return BlazeLayout.render('basicLayout', {
    content: template, header: 'header', footer: 'footer'
  });
}

export function renderSlim(template) {
  return BlazeLayout.render('basicLayout', { content: template });
}
