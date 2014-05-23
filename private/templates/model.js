REPLACE_FIRST_UPPERCASE = new Meteor.Collection2('REPLACE_FIRST', { 'schema' : {} });

// Collection2 already does schema checking"
// Add custom permission rules if needed"
REPLACE_FIRST_UPPERCASE.allow({
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
