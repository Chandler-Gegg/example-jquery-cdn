define(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

    var students = require('');
    $(function() {
        $('body').alpha().beta();
    });
});
