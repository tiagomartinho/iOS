
var testPasses = []
var testFailures = []
var tests = []

function assertTrue(isTrue) {

    if (!isTrue) {
        throw Error("expected true")
    }

}

function assertEquals(expected, actual) {

    if (expected !== actual) {
        throw Error("expected <em>" + JSON.stringify(expected) + "</em> but was <em>" + JSON.stringify(actual) + "</em>")
    }

}

function test(name, func) {
    tests.push({name: name, func: func})
}

function runTest(name, func) {
    var pass = true
    try {
        func()
        testPasses.push(name)
    } catch(error) {
        testFailures.push({"name": name, "error": error})
        pass = false
    }
}

function runSuite() {

    for (index in tests) {
        var test = tests[index]
        runTest(test.name, test.func)
    }

}