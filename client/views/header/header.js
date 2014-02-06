Template['header'].helpers({
});

Template['header'].events({
    'click .resize.button' : function () {
        // As long as the new Meteor UI isn't out the whole template will re-render
        $('.header-wrapper').toggleClass('active');
        $('.angle.icon').toggleClass('down').toggleClass('up');
    }
});

