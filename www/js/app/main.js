define(["require", "students","jquery", "jquery.alpha", "jquery.beta"], function(require, students, $) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    // var studentsModule = require('../lib/students');
    console.log(students.getData());
    $(function() {
        $('body').alpha().beta();

    });
    var $log = $( "#students" );
    var str = "hello, <b>my name is</b> jQuery.";
    $log.append(str);
    html = $.parseHTML( str );
});
