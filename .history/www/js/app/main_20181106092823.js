define(["jquery", "jquery.alpha", "jquery.beta", "students"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

    // var students = require('./students');
    console.log(students.getData());
    $(function() {
        $('body').alpha().beta();
    });
});
