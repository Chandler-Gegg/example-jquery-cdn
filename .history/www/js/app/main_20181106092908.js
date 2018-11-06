define(["jquery", "jquery.alpha", "jquery.beta", "require"], function($, require) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

    var students = require('./students');
    console.log(students.getData());
    $(function() {
        $('body').alpha().beta();
    });
});
