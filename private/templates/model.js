ReplaceFirstUpperCase = new Meteor.Collection2('ReplaceFirst', { 'schema' : {} });

// Collection2 already does schema checking"
// Add custom permission rules if needed"
ReplaceFirstUpperCase.allow({
    insert : function () {
        return true;
    },
    update : function () {
        return true;
    },
    remove : function () {
        return true;
    }
});
