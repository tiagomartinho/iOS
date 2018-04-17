
function renderResults() {

    var resultsHolder = document.getElementById("test-results") 

    var passesTitle = document.createElement("h2")
    passesTitle.innerHTML = "Passes"
    resultsHolder.appendChild(passesTitle)

    for (result in testPasses) {
        var pass = testPasses[result]
        console.log("TEST `" + pass + "` PASS")

        var output = document.createElement("span")
        output.setAttribute('class', 'test-result-pass')
        output.innerHTML = pass
        resultsHolder.appendChild(output)
    }

    var failuresTitle = document.createElement("h2")
    failuresTitle.innerHTML = "Failures"
    resultsHolder.appendChild(failuresTitle)

    for (result in testFailures) {

        var failure = testFailures[result]
        console.log("TEST `" + failure.name + "` FAIL")

        var output = document.createElement("div")
        output.setAttribute('class', 'test-result-failure')

        var testName = document.createElement("span")
        testName.setAttribute('class', 'name')
        testName.innerHTML = failure.name
        output.appendChild(testName)

        var reason = document.createElement("span")
        reason.setAttribute('class', 'failure')
        reason.innerHTML = failure.error
        output.appendChild(reason)

        resultsHolder.appendChild(output)
    }

    console.log(testFailures.length + " FAILURES") 
}
