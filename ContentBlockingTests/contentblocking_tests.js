
test("this should pass", function() {

    var result = duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {
        assertTrue(shouldBlock)
        console.log("block: " + JSON.stringify(arguments))
    })

})

test("this should fail", function() {

    var result = duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {
        assertEquals(false, shouldBlock)
        console.log("block: " + JSON.stringify(arguments))
    })

})
