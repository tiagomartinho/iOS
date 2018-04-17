
# Content Blocking Tests

## Pre-requisits

* PhantomJS 2.1.1 or greater


## Execution

See `../run_content_blocking_tests.sh`


## Explaination

`content_blocking_test_harness.html` bootstraps all the required scripts and then executes a series of tests using a light weight, hand made testing framework

`mock*.js` provide minmial mocks of the dependencies that `contentblocker.js` has in order to operate.  Unit tests should be able to configure these to various test paths through the code.

`contentblocking_tests.js` are the unit tests executed against `contentblocker.js`.

`test*.js` is a lightweight, hand-grown, unit testing framework and results renderer.

`run.js` is the phantomjs bootstrap script which loads the html file and captures the output, checking for test failures and exiting with an error if any are detected.  CI systems can use this to fail a build.
