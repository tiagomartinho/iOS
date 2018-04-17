
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg)

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    if (endsWith(msg, " FAILURES") && msg !== "0 FAILURES") {
        phantom.exit(1)
    }

}

page.open('contentblocking_test_suite.html', function(status) {
    // page.render('contentblocking_test_suite.png')
    phantom.exit()
})
